import type { APIRoute } from 'astro'
import { app } from '../../firebase/server'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import { streamToString } from '../../lib/utils'
import { send } from '../../lib/email'
import { getAuth } from 'firebase-admin/auth'

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const { html, json, date } = JSON.parse(await streamToString(request.body))
  if (!html || !json)
    return new Response('Missing required fields', { status: 400 })

  try {
    const auth = getAuth(app)

    // Authenticate
    const sessionCookie = cookies.get('session').value
    const decodedCookie = await auth.verifySessionCookie(sessionCookie)
    if (!decodedCookie)
      return new Response('Invalid authentication', { status: 400 })

    const db = getFirestore(app)

    // Get subscribers
    const subscribersRef = await db.collection('subscribers').get()
    const subscribers = subscribersRef.docs.map(doc => {
      const data = doc.data()
      return data.email
    })

    // Send email
    await send(subscribers, html, `365 Days of Making: ${date}`)

    // Upload to database
    const newslettersRef = db.collection('newsletters')
    await newslettersRef.add({
      json,
      date: Timestamp.fromDate(format(new Date(date) || new Date()))
    })
  } catch (error) {
    console.log(error)
    return new Response(`Something went wrong: ${error.message}`, {
      status: 500
    })
  }

  return new Response('', { status: 200 })
}

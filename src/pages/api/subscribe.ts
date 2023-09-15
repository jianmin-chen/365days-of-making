import type { APIRoute } from 'astro'
import { app } from '../../firebase/server'
import { getFirestore } from 'firebase-admin/firestore'

const streamToString = async stream => {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk))
  }
  return Buffer.concat(chunks).toString('utf-8')
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const { email } = JSON.parse(await streamToString(request.body))
  if (!email) return new Response('Missing required fields', { status: 400 })

  try {
    const db = getFirestore(app)
    const subscribersRef = db.collection('subscribers')
    // Make sure email isn't already subscribed
    if (!(await subscribersRef.where('email', '==', email).get()).docs.length)
      await subscribersRef.add({ email })
  } catch (error) {
    return new Response(`Something went wrong: ${error.message}`, {
      status: 500
    })
  }

  return new Response('', { status: 200 })
}

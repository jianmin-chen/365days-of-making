import type { APIRoute } from 'astro'
import { app } from '../../firebase/server'
import { getFirestore } from 'firebase-admin/firestore'

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const email = formData.get('name')?.toString()

  if (!email) return new Response('Missing required fields', { status: 400 })

  try {
    const db = getFirestore(app)
    const subscribersRef = db.collection('subscribers')
    await subscribersRef.add({ email })
  } catch (error) {
    return new Response(`Something went wrong: ${error.message}`, {
      status: 500
    })
  }

  return new Response('', { status: 200 })
}

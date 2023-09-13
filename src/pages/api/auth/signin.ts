import type { APIRoute } from 'astro'
import { app } from '../../../firebase/server'
import { getAuth } from 'firebase-admin/auth'

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app)

  // Get token from request headers
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1]
  if (!idToken) return new Response('No token found', { status: 401 })

  // Verify id token
  try {
    await auth.verifyIdToken(idToken)
  } catch (error) {
    return new Response('Invalid token', { status: 401 })
  }

  // Create and get session cookie
  const fiveDays = 50 * 50 * 24 * 5 * 1000
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays
  })

  cookies.set('session', sessionCookie, { path: '/' })

  return new Response('', { status: 200 })
}

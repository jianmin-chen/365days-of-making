import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete('session', {
    path: '/'
  })

  return new Response('', { status: 200 })
}

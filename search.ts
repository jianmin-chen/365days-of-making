import type { APIRoute } from 'astro'
import { createSt } from '../../lib/search'

export const GET: APIRoute = async () => {
  await createSt()
  return new Response('', { status: 200 })
}

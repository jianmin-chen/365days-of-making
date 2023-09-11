import members from '../../lib/webring.json' assert { type: 'json' }

export async function GET({ params, request }) {
  // Return iframe
  return new Response(JSON.stringify(members))
}

import members from '../../lib/webring.json' assert { type: 'json' }

export async function GET({ params, request, response }) {
  // Return iframe
  const res = new Response(JSON.stringify(members))
  res.headers.append('Access-Control-Allow-Credentials', 'true')
  res.headers.append('Access-Control-Allow-Origin', '*')
  res.headers.append('Access-Control-Allow-Methods', 'GET,POST')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  return res
}

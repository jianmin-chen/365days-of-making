import { createClient } from '@supabase/supabase-js'

export async function POST({ params, request }) {
  const { email } = await request.json()

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  try {
    const { error } = await supabase.from('emails').insert({ email })
    if (error) throw new Error(error)
    return new Response(
      JSON.stringify({
        sucess: true
      })
    )
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        reason: err.toString()
      })
    )
  }
}

import type { APIRoute } from 'astro'
import { app } from '../../firebase/server'
import { getFirestore } from 'firebase-admin/firestore'
import dayjs from 'dayjs'

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  let date = params.get('date')
  if (!date) return new Response('', { status: 404 })

  date = date.split('-')
  date = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]))
  const db = getFirestore(app)
  const newsletterRef = await db.collection('newsletters').get()
  const newsletter = newsletterRef.docs
    .find(doc => {
      const newsletterDate = doc.data().date.toDate()
      if (dayjs(newsletterDate).isSame(dayjs(date), 'day')) return true
      return false
    })
    ?.data()
  if (newsletter)
    return new Response(JSON.stringify(newsletter), { status: 200 })
  return new Response('', { status: 404 })
}

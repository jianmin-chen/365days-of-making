import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import dayjs from 'dayjs'

export async function GET(context) {
  const entries = await getCollection('entries')
  return rss({
    title: '365 Days of Making',
    description:
      "I'm going to learn something new and/or work on something cool everyday for the next 365 days!",
    site: context.site || 'https://jianminchen.com',
    items: entries.map(entry => {
      let excerpt = 'No excerpt provided.'
      let nlnl = entry.body.trim().indexOf('\n\n')
      if (nlnl !== -1) excerpt = `${entry.body.slice(0, nlnl)}`
      return {
        excerpt,
        title: entry.data.title,
        day: entry.data.day.toString(),
        date: dayjs(entry.data.date).format('YYYY-MM-DD')
      }
    }),
    customData: `<language>en-us</language>`
  })
}

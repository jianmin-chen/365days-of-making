// Passed into Stork for static searching: https://github.com/jameslittle230/stork
// Convert static
import fs from 'fs'
import path from 'path'
import TOML from '@iarna/toml'
import { getCollection } from 'astro:content'

export const createSt = async () => {
  let files = [
    {
      path: 'content/start.mdx',
      url: '/start',
      title: 'Start your own!',
      filetype: 'Markdown'
    }
  ]

  const entries = await getCollection('entries')
  entries.map(entry => {
    files.push({
      path: `entries/${entry.id}`,
      url: `/entry/${entry.data.day.toString()}`,
      title: `${entry.data.title} - Day ${entry.data.day}`,
      filetype: 'Markdown'
    })
  })

  const str = TOML.stringify({
    input: {
      base_directory: 'src/content/',
      url_prefix: 'https://365days-of-making.vercel.app/',
      files
    }
  })

  fs.writeFile(path.join(process.cwd(), 'public', 'search.toml'), str, err => {
    if (err) console.error(err)
    else
      console.log(
        'Output to',
        path.join(process.cwd(), 'public', 'search.toml')
      )
  })
}

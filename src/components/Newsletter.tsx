import { ReadOnly } from './Editor'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export default function Newsletter({ date }) {
  const [newsletter, setNewsletter] = useState(undefined)

  useEffect(() => {
    fetch(`/api/newsletter?date=${dayjs(date).format('YYYY-MM-DD')}`)
      .then(res => res.json())
      .then(json => {
        setNewsletter(json.json)
      })
      .catch(err => console.log(err))
  }, [])

  return newsletter !== undefined ? (
    <details>
      <summary>Today's newsletter</summary>
      <ReadOnly content={newsletter} />
    </details>
  ) : (
    <p>No newsletter yet.</p>
  )
}

import { useRef, useEffect } from 'react'

export default function Header({ popup }) {
  const modalRef = useRef(null)

  return (
    <>
      {popup !== false && (
        <button
          className="special"
          id="modal-button"
          onClick={() => {
            const modal = modalRef.current
            modal.classList.toggle('modal-open')
          }}>
          <span>psst: you can subscribe to updates!</span>
          <img src="/dino.png" />
        </button>
      )}
      <header>
        <div>
          <a href="https://hackclub.com/">
            <img
              style={{ border: 0, width: '200px', zIndex: '999' }}
              src="https://assets.hackclub.com/flag-orpheus-top.svg"
              alt="Hack Club"
            />
          </a>
          <h1>
            <a href="/">365 Days of Making</a>
          </h1>
        </div>
        <div>
          <h2>
            I'm going to learn something new and/or work on something cool
            everyday for the next 365 days!
          </h2>
          <nav>
            <h2>
              <a href="/">Entries</a>
            </h2>
            <h2>/</h2>
            <h2>
              <a href="/start">About & Start your own!</a>
            </h2>
          </nav>
        </div>
      </header>
      <div
        className="modal"
        ref={modalRef}
        onClick={() => {
          const modal = modalRef.current
          modal.classList.toggle('modal-open')
        }}>
        <style jsx global>{`
          body {
            overflow-y: hidden;
          }
        `}</style>
        <div
          className="modal-content"
          onClick={event => event.stopPropagation()}>
          <span
            className="close"
            onClick={() => {
              const modal = modalRef.current
              modal.classList.toggle('modal-open')
            }}>
            &times;
          </span>
          <p style={{ marginBottom: '0', marginTop: '0' }}>
            My goal with this blog is to create helpful content for front-end
            web devs, and my newsletter is no different! I'll let you know when
            I publish new content, and I'll even share exclusive newsletter-only
            content now and then.
          </p>
          <form
            onSubmit={event => {
              event.preventDefault()
              if (!event.target.email) {
                return
              }

              fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: event.target.email
                })
              })
                .then(res => res.json())
                .then(json => {})
                .catch(err => {})
            }}>
            <input
              placeholder="Email"
              autoComplete="off"
              name="email"
              type="email"
              required
            />
            <button>&rarr;</button>
          </form>
        </div>
      </div>
    </>
  )
}

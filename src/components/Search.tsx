import { useEffect, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function Search() {
  const modalRef = useRef()

  useEffect(() => {
    stork.initialize('/stork.wasm')
    stork.register('search', '/search.st', { forceOverwrite: true })
  }, [])

  useHotkeys(
    'meta+k',
    () => {
      const modal = modalRef.current
      modal.classList.add('modal-open')
    },
    { preventDefault: true }
  )

  useHotkeys(
    'ctrl+k',
    () => {
      const modal = modalRef.current
      modal.classList.add('modal-open')
    },
    { preventDefault: true }
  )

  return (
    <div
      className="modal"
      ref={modalRef}
      onClick={() => {
        const modal = modalRef.current
        modal.classList.toggle('modal-open')
      }}>
      <div
        className="modal-content stork-wrapper"
        onClick={event => event.stopPropagation()}>
        <input
          autoFocus={true}
          className="stork-input"
          style={{ borderRadius: 0 }}
          data-stork="search"
        />
        <div data-stork="search-output"></div>
      </div>
    </div>
  )
}

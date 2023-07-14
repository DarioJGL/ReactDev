import { EVENTS } from './consts.js'

export function navigate (href) {
  window.history.pushState({}, null, href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // primary click
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a href={to} onClick={handleClick} target={target} {...props} />
}

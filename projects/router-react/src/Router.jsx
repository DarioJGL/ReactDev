import { EVENTS } from './consts.js'
import { useEffect, useState } from 'react'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { match } from 'path-to-regexp'

export const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: () => <h1>Has buscado </h1>
  }
]
export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const { Component: Page } = routes.find(({ path }) => {
    const matcher = match(path, { decode: decodeURIComponent })
    return matcher(currentPath)
  }) || {}

  return Page
    ? <Page />
    : <DefaultComponent />
}

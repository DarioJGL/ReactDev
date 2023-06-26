import { useEffect, useState } from 'react'
import { getRandomFact } from './facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}

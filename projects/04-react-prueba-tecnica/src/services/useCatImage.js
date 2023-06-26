import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split('', 3)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}

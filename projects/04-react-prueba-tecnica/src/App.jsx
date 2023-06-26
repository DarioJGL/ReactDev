import './App.css'
import { useCatImage } from './services/useCatImage'
import { useCatFact } from './services/useCatFact'

function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h3>App de gaticos</h3>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App

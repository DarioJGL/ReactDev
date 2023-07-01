import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/Movies.jsx'
import { useEffect, useState } from 'react'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError(null)
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se permiten busquedas con numeros')
      return
    }

    if (search.length < 3) {
      setError('Por favor ingrese al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {
    search,
    setSearch,
    error
  }
}

function App () {
  const { movies: mappedMovies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' placeholder='Avengers, Star Wars, The Matrix ...' className='input' />
          <button className='button' type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App

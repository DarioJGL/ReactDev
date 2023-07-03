import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/Movies.jsx'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'just-debounce-it'

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
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' placeholder='Avengers, Star Wars, The Matrix ...' className='input' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button className='button' type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App

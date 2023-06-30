export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
         movies.map(movie => (
           <li className='movie' key={movie.imdbID}>
             <h3>{movie.Title}</h3>
             <p>{movie.Year}</p>
             <img src={movie.Poster} alt={movie.Title} />
           </li>
         ))
        }
    </ul>
  )
}

export function EmptyListOfMovies () {
  return (
    <p>No se encontraron resultados</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <noMoviesResult />
  )
}

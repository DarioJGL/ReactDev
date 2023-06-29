import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix ...' className='input' />
          <button className='button' type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Aqui iran los resultados
      </main>

    </div>
  )
}

export default App

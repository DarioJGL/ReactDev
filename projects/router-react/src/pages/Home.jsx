import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una pagina donde cree un react router desde cero</p>
      <Link to='/about'>Ir a Sobre Nosotros</Link>
    </>
  )
}

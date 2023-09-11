import {} from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
      <Link to='Home'>Home</Link>
      <Link to="produtos">Produtos</Link>
      <Link to="sobre">Sobre</Link>
    </>
  )
}

export default Nav
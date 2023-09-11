import {} from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Produtos from './Produtos'

function App() {
  return (
    <>
      <Nav/>
      <Produtos/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import reactLogo from '../../assets/react.svg'
import Nav from '../Nav/Nav.jsx'


const NavBar = () => {
  return (
    <header className='flex h-[15vh] items-center px-4 justify-between'>
      <section className='flex justify-center items-center h-full'>
        <h1 className='font-semibold text-2xl'>MYTINERARY</h1>
        <img className='h-6 mx-4' src='{reactLogo}' alt="react" />
      </section>
      <Nav />
    </header>
  )
}

export default NavBar
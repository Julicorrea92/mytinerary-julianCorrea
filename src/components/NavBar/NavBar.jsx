import React from 'react'
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <header className='flex h-[15vh] items-center px-4 justify-between'>
      <section className='flex justify-center items-center h-full'>
        <h1 className='font-semibold text-2xl'>MYTINERARY</h1>
        <img className='h-6 mx-4' src='{reactLogo}' alt="react" />
      </section>

      <nav>
        <ul className='flex gap-4'>
          <li><a className='text-white bg-[rgba(225,225,225,0.4)] rounded-lg p-2' href="#">Link 1</a></li>
          <li><a className='text-white bg-[rgba(225,225,225,0.4)] rounded-lg p-2' href="#">Link 2</a></li>
          <li><a className='text-white bg-[rgba(225,225,225,0.4)] rounded-lg p-2' href="#">Link 3</a></li>
          <li><a className='text-white bg-[rgba(225,225,225,0.4)] rounded-lg p-2' href="#">Link 4</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar
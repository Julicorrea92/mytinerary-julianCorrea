import React from 'react'
import Nav from './Nav.jsx'
import Icon from './Icon.jsx'
import { faEarthAmericas, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Button from './Button.jsx'

const NavBar = () => {
  return (
    <header className='flex h-[10vh] items-center px-4 justify-between bg-transparent relative z-10'>
      <nav className='flex  justify-center items-center h-full'>
        <Icon className='h-12 p-4' icon={faEarthAmericas} />
        <h1 className='font-semibold sm:text-base md:text-lg lg:text-xl'>MyTinerary</h1>
      </nav>
      <div className='flex justify-end'>

        <Nav />
        <div className='flex h-10 items-center bg-blue-500 hover:bg-blue-600 text-white mr-4 py-2 px-4 rounded transition duration-500'>
          <Icon className='px-1' icon={faUserAlt} />
          <Button className='text-[1.15rem]' content='Login' />
        </div>
      </div>
    </header>
  )
}

export default NavBar
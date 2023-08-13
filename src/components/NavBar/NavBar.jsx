import React from 'react'
import Nav from '../../components/Nav/Nav.jsx'
import Icon from '../../components/Icons/Icon.jsx'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button/Button.jsx'


const NavBar = () => {
  return (
    <header className='flex h-[10vh] items-center px-4 justify-between'>
      <section className='flex justify-center items-center h-full'>
        <Icon css= 'h-12 p-4' icon={faEarthAmericas} />
        <h1 className='font-semibold text-2xl'>MyTinerary</h1>
      </section>
      <Nav />
      <Button css='bg-blue-800 hover:bg-blue-700 text-white py-2 px-3 rounded transition duration-500' content='Login' />
    </header>
  )
}

export default NavBar
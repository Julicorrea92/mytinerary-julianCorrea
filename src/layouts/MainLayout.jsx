import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'



const Main = () => {


  return (
    <>
      <div className='w-full min-h-screen flex flex-col relative '>
        <div className='absolute top-0 left-0 right-0 '>
          <NavBar />
        </div>
        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Main;
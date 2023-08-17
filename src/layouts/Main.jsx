import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'


const Main = ({ children }) => {
  return (
    <>
      <div className='w-full min-h-screen flex flex-col relative '>
        <div className='absolute top-0 left-0 right-0 '>
          <NavBar />
        </div>
        <div className='flex-grow'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main
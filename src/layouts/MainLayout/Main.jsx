import React from 'react'
import ReactLogo from '../../assets/Verano-2019-Mar-del-Plata-Atardecer-y-amanecer-con-drone-3-711478802.jpg'
import NavBar from '../../components/NavBar/NavBar.jsx'

const Main = ({ children }) => {
  return (
    <>
      <div className='w-full bg-transparent min-h-screen flex flex-col'>
        <NavBar />
        {children}
      </div>
    </>
  )
}

export default Main
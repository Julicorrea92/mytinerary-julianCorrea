import React from 'react'
import reactLogo from '../../assets/pexels-saurabh-pandey-17685123.jpg'
import Button from '../../components/Button/Button'

const Index = () => {
  return (
    <div className=''>
      <img className='' src={reactLogo} alt="" />
      <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <Button css='bg-blue-500 text-white py-2 px-3 rounded hover: bg-blue-600' content='Click me' />
    </div>
  )
}

export default Index
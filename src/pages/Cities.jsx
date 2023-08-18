import React from 'react'
import { useParams } from 'react-router-dom'


const Cities = () => {
  const params = useParams();

  console.log(params);



  return (
    <div className='w-full h-screen justify-center flex text-[500px]'>Cities</div>
  )
}

export default Cities
import React from 'react'
import { useParams } from 'react-router-dom'
import reactLogo from '../assets/pexels-aslak-sønderland-2880467.jpg'
import { Link as Anchor } from 'react-router-dom'
import InputSearch from '../components/InputSearch'
import ImageList from '../components/ImageList'




const Cities = () => {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <article>
        <div className='flex flex-col items-center lg:flex-row lg:items-baseline'>
          <img className='w-full h-[80vh] object-cover object-top -z-10' src={reactLogo} alt="City Council" />
          <div className='absolute top-40 translate-x-1/2 translate-y-1/2 font-sans left-0 p-4 '>
            <p className='font-bold text-[2.5rem]'>Collection of the most beautiful </p>
            <p className='font-bold text-center text-[2rem]'>places and experience</p>
          </div>
        </div>
      </article>
      <div className='flex justify-center items-center my-6'>
        <InputSearch className='px-4 py-2 border border-gray-300 rounded-md text-base w-72'/>
      </div>
      <div className='w-full  flex flex-col relative  justify-center min-h-[60vh] max-w-full mb-4'>
        <ImageList className='flex items-center' />
      </div>
      
    </section>

    
  )
}

export default Cities
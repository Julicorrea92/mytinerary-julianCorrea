import React from 'react'
import { useParams } from 'react-router-dom'
import InputSearch from '../components/InputSearch'
import ImageList from '../components/ImageList'

const Cities = () => {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <article>
        <div className="bg-[url('https://images.pexels.com/photos/17800720/pexels-photo-17800720/free-photo-of-paisaje-montanas-vacaciones-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[100vh] w-full bg-cover " alt='A Village In A Mountain Valley'>
          <div className='flex flex-col items-center '>
            <div className='font-sans text-center mt-20 p-4'>
              <p className='font-bold text-center text-[2.5rem]'>Collection of the most beautiful </p>
              <p className='font-bold text-center text-[2rem]'>places and experience</p>
            </div>
          </div>
        </div>
      </article>
      <div className='flex justify-center items-center my-6'>
        <InputSearch className='px-4 py-2 border border-gray-300 rounded-md text-base w-72' />
      </div>
      <div className='w-full  flex flex-col justify-center min-h-[60vh] max-w-full mb-4'>
          <div className='flex justify-center'>
            {/* <h1 className='flex'>List of Cities</h1> */}
            <ImageList className='' />
          </div>
      </div>
  
    </section>
  )
}

export default Cities
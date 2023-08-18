import { React } from 'react'
import reactLogo from '../assets/pexels-saurabh-pandey-17685123.jpg'
import Button from '../components/Button.jsx'
import CarouselIndex from '../components/CarouselIndex.jsx'


const Index = () => {
  return (
    <section>
      <article>
        <div className='flex flex-col items-center lg:flex-row lg:items-baseline'>
          <img className='w-full h-[100vh] object-cover object-top -z-10' src={reactLogo} alt="Mountains" />
          <div className='absolute top-[65px] font-sans left-0 p-4 '>
            <p className='font-bold text-[2.5rem]'> Find your perfect trip</p>
            <p className='text-[1.5rem]'>designed by insiders who know and love their cities!</p>
            <Button className='text-[1.5rem] mt-8 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition duration-500' content='Give it a try!'></Button>
          </div>
        </div>
      </article>
      <article>
        <div>
          <CarouselIndex />
        </div>
      </article>
    </section>
  )
}
export default Index;
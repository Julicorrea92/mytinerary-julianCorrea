import { React } from 'react'
import Button from '../components/Button.jsx'
import CarouselIndex from '../components/CarouselIndex.jsx'
import { Link as Anchor } from 'react-router-dom'




const Index = () => {
  return (
    <section>
      <article>
        <div className="bg-[url('https://images.pexels.com/photos/17685123/pexels-photo-17685123/free-photo-of-nieve-paisaje-montanas-casas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[100vh] w-full bg-cover">
        <div className='flex flex-col items-center lg:flex-row lg:items-baseline'>
          <div className=' font-sans left-0 mt-20 p-4 '>
              <p className='font-bold text-[2.5rem]'> Find your perfect trip</p>
              <p className='text-[1.5rem]'>designed by insiders who know and love their cities!</p>
              <Anchor to='/cities'>
                <Button  className='text-[1.5rem] mt-8 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition duration-500' to={'/cities'} content='Give it a try!'/>
              </Anchor>
          </div>
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
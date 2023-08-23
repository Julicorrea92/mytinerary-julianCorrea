import React, { useState, useEffect } from 'react';
import InputSearch from '../components/InputSearch';
import ImageList from '../components/ImageList';


// const Cities = () => {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/cities')
//       .then(res => setCities(res.data.response))
//       .catch(error => console.error('Error fetching cities:', error));
//   }, []);

//   const [cityFilter, setCityFilter] = useState('');
//   const [countryFilter, setCountryFilter] = useState('');

//   const handleCityFilterChange = (event) => {
//     setCityFilter(event.target.value);
//   };

//   const handleCountryFilterChange = (event) => {
//     setCountryFilter(event.target.value);
//   };

//   return (
//     <section>
//       <article>

//         <div className="bg-[url('https://images.pexels.com/photos/17800720/pexels-photo-17800720/free-photo-of-paisaje-montanas-vacaciones-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[100vh] w-full bg-cover " alt='A Village In A Mountain Valley'>
//           <div className='flex flex-col items-center '>
//             <div className='font-sans text-center mt-20 p-4'>
//               <p className='font-bold text-center text-[2.5rem]'>Collection of the most beautiful </p>
//               <p className='font-bold text-center text-[2rem]'>places and experience</p>
//             </div>
//           </div>
//         </div>

//       </article>
//       <div className='flex justify-center items-center my-6'>
//         <h1 className='flex justify-center text-[1.25rem] mr-8'>Search your favourite place!</h1>
//         <InputSearch
//           className='px-4 py-2 border border-gray-300 rounded-md text-base w-72'
//           onChange={handleFilterChange}
//           value={filterText}
//         />
//       </div>
//       <div className='w-full flex flex-col justify-center min-h-[60vh] max-w-full mb-4'>
//         <div className='flex justify-center'>
//           <ImageList cities={cities} filterText={filterText} />
//         </div>
//       </div>
//     </section>
//   );
// };

const Cities = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

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
        <h1 className='flex justify-center text-[1.25rem] mr-8'>Search your favourite place!</h1>
        <InputSearch
          className='px-4 py-2 border border-gray-300 rounded-md text-base w-72'
          placeholder='Search by city or country'
          onChange={handleFilterChange}
          value={filterText}
        />
      </div>
      <div className='w-full  flex flex-col justify-center min-h-[60vh] max-w-full mb-4'>
        <div className='flex justify-center'>
          <ImageList filterText={filterText} />
        </div>
      </div>
    </section>
  );
};

export default Cities;


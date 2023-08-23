import ImageCard from './ImageCard.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ImageList = ({ filterText }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/cities')
            .then((res) => setCities(res.data.response))
            .catch((error) => console.error('Error fetching cities:', error));
    }, []);

    const filteredCities = cities.filter((city) => {
        const cityMatches = city.city.toLowerCase().startsWith(filterText.toLowerCase());
        const countryMatches = city.country.toLowerCase().startsWith(filterText.toLowerCase());
        return cityMatches || countryMatches;
    });

    return (
        <div className='flex flex-col justify-center items-center'>
            {filteredCities.length === 0 ? (
                <div className='border border-gray-300 rounded-md p-4 text-center'>
                    <img className='h-64' src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png" alt="No results found." />
                </div>
            ) : (
                filteredCities.map((city) => (
                    <ImageCard key={city._id} data={city} />
                ))
            )}
        </div>
    );
};


export default ImageList;
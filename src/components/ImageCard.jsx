import React from 'react'

const ImageCard = ({ data }) => {

    const {photo, city, country} = data

    return (
        <div className='flex flex-col w-5/6 justify-center items-center'>
            <img className='rounded-md justify-center' src={photo} alt={country} />
            <div className='aboslute transform -translate-y-[62px] rounded-b-md w-full bg-black bg-opacity-50 text-white'>
                <h1 className='text-center text-[1.25rem] font-bold mt-1'>{city}</h1>
                <h3 className='text-center text-[1rem] font-bold mb-1'>{country}</h3>
            </div>
        </div>
    )
}

export default ImageCard;
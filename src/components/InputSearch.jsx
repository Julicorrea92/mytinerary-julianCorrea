import React from 'react'

const InputSearch = ({className, type, value}) => {



    return (
    <input
    className={className}
    type='text'
    value={value}
    placeholder="Search..."
  />  
  )
}

export default InputSearch
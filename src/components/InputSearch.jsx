import React from 'react'

const InputSearch = ({className,  value, onChange}) => {



    return (
    <input
    className={className}
    type='text'
    value={value}
    placeholder="Let's go!"
    onChange={onChange}
  />  
  )
}

export default InputSearch
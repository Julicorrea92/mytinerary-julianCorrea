import React from 'react'

const LiAnchor = ({value, content}) => {
  return (
    <li><a className='text-black text-[1.5rem]' href={value}>{content}</a></li>
)
}

export default LiAnchor
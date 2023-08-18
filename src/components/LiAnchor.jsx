import React from 'react'
import { Link as Anchor, NavLink } from 'react-router-dom'



const LiAnchor = ({value, content}) => {
  return (
    <li><Anchor className='text-black text-[1.5rem] hover:text-gray-600 transition duration-500' to={value}>{content}</Anchor></li>
)
}


export default LiAnchor
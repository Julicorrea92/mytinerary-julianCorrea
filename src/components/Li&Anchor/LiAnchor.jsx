import React from 'react'

const LiAnchor = ({value, content}) => {
  return (
    <li><a className='text-white bg-[rgba(225,225,225,0.4)] rounded-lg p-2' href={value}>{content}</a></li>
)
}

export default LiAnchor
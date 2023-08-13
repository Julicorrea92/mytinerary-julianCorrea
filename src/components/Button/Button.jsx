import React from 'react'

const Button = ({css, content}) => {
  return (
    <button className={css} >{content}</button>
  )
}

export default Button
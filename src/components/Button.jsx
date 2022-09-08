import React from 'react'

const Button = ({children, styles, callback}) => {
  return (
    <button className={`${styles}`} onClick={callback}>{children}</button>
  )
}

export default Button
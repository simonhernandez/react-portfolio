import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className={`${styles}`}>{children}</div>
  )
}

export default Wrapper
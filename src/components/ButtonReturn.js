import React from 'react'
import returnIcon from '../images/return.png'

function ButtonReturn({className,...props}) {
  return (
    <button className={`returnButton ${className}`} {...props}><img src={returnIcon} alt="return back" /></button>
  )
}

export default ButtonReturn
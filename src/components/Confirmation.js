import React from 'react'
import { Link } from 'react-router-dom'

function Confirmation() {
  return (
    <div className='confirm'>
        <h3 className='confirm'>Booking has been successfully </h3>
        <h1 className='confirm'>CONFIRMED!</h1>
        <Link to={'/'}><button style={{display:"block",margin:"20px auto"}}>Go to a Homepage</button></Link>
    </div>
  )
}

export default Confirmation
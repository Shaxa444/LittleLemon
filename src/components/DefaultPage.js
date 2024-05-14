import React from 'react'

function DefaultPage({name}) {
  return (
    <div className='DefaultPage'>
      <img src={require("../images/HEALTHYFRESH.jpg")} alt="mainMeal" />
      <h1>{name}</h1>
    </div>
  )
}

export default DefaultPage
import React, { useEffect, useState } from 'react'
import Booking from './Booking'
import { Route,Routes } from 'react-router-dom'
import Header from './Header'
import Confirmation from './Confirmation'
import { useNavigate } from 'react-router-dom'
import MealsPage from './MealsPage'
import Receipt from './Receipt'

function Main() {
  const [reservations, setReservations] = useState([])
  const [availableTimes,setAvailableTimes] = useState([])
  const [orders,setOrders] = useState([])
  const navigate = useNavigate()
  
  useEffect(
    ()=>{
      var Times = []
      for (let i = 0; i < 5; i++) {
        const hours = Math.floor(Math.random()*13)+11
        const minutes = Math.floor(Math.random()*4)*15
        Times.push(`${hours>9? hours: `0`+hours}:${minutes>9? minutes: `0`+minutes}`)
      }
      Times.sort((a,b)=> Number(a[0]+a[1])*60+Number(a[3]+a[4])-Number(b[0]+b[1])*60-Number(b[3]+b[4]))
      setAvailableTimes(Times)
    },[]
  )

  function getBookData(a){
    setReservations([...reservations,a])
    console.log(reservations)
    console.log(a)
    setAvailableTimes(availableTimes.filter(el => el!==a.time))
    navigate('/confirm')
  }

  useEffect(
    ()=>{
      console.log(orders)
    },[orders]
  )


  return (
    <main>
      <Receipt orders={orders}/>
      <Routes>
        <Route path='/' element={<><Header /><MealsPage orderHandler={(a)=> a!== null && setOrders([...orders,a])}/></>}/>
        <Route path='/booking' element={<Booking availableTimes={availableTimes} getBookData={getBookData} />}/>
        <Route path='/confirm' element={<Confirmation />} />
      </Routes>
    </main>
  )
}

export default Main
import React, { useState } from 'react'
import ButtonReturn from './ButtonReturn'
import { Link } from 'react-router-dom'

function Booking({getBookData,availableTimes}) {
    const[firstName,setFirstName] = useState("")
    const[guests,setGuests] = useState("")
    const[date,setDate] = useState("")
    const[time,setTime] = useState("")
    const[phone,setPhone] = useState("")

    function handlerForm(a){
        a.preventDefault()
        console.log(time)
        getBookData({firstName:firstName,guests:guests,date:date,time:time,phone:phone})
    }

  return (
    <div className='BookingPage'>
        <fieldset>
            <legend>Reservation</legend>
            <form onSubmit={handlerForm}>
                <div>
                    <label htmlFor="firstName">First Name</label><br />
                    <input type="text" id="firstName" value={firstName} onChange={(a)=>setFirstName(a.target.value)}  placeholder='Alexandra . . .' required/>
                </div>
                <div>
                    <label htmlFor="guests">A number of Guests</label><br />
                    <input type="number" id="guests" defaultValue={4} onChange={(a)=>setGuests(a.target.value)}  min={4} placeholder='4' required/>
                </div>
                <div>
                    <label htmlFor="date">Date</label><br />
                    <input type="date" id="date" value={date} onChange={(a)=>setDate(a.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="time">Time</label><br />
                    <select id="time" onChange={(a)=> setTime(a.target.value)}>
                        {availableTimes.map((el,index) =>{
                            return <option key={index} value={el}>{el}</option>})}
                    </select>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="number" id="phone" onChange={(a)=>setPhone(a.target.value)} placeholder='+998(**)***-**-**' required/>
                </div>
                <button onClick={()=> setTime(time===""? availableTimes[0]: time)}>Book Now</button>
            </form>
            <Link to={"/"}>
                <ButtonReturn className={"formReturn"} />
            </Link>
        </fieldset>
    </div>
  )
}

export default Booking
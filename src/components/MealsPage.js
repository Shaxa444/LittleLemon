import React, { useState } from 'react'
import MealList from './MealList'
import ratingIcon from '../images/ratingIcon.png'
import unratingIcon from '../images/rating.png'
import Swal from 'sweetalert2'

function MealsPage({orderHandler}) {
    const[visibility,setVisibility] = useState(true)
    const[showMore,setShowMore] = useState(3)
    const[sortType,setSortType] = useState("Alp-AZ")
    const[order,setOrder] = useState(null)

    function sortHandler(){
        if (sortType === "Alp-AZ"){
            MealList.sort((a,b)=> a.name>b.name && -1)
        } else if(sortType ==="Alp-ZA"){
            MealList.sort((a,b)=> a.name>b.name && 1)
        } else if(sortType ==="Price-HL"){
            MealList.sort((a,b)=> a.price-b.price)
        } else if(sortType ==="Price-LH"){
            MealList.sort((a,b)=> b.price-a.price)
        } else if(sortType ==="Rate-HL"){
            MealList.sort((a,b)=> a.rate-b.rate)
        } else if(sortType ==="Rate-LH"){
            MealList.sort((a,b)=> b.rate-a.rate)
        }
    }

    function handleNotification(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your Meal has been Ordered.",
                icon: "success"
              });
              orderHandler(order)
            }
          });
    }

    return (
        <div className='mealsPage'>
        <h2>Our special Meals</h2>
        <div>
            <label htmlFor="sorting">Sort by</label>
            <select id='sorting' onChange={(a)=> {setSortType(a.target.value)
                sortHandler()}}>
                <option value="Alp-AZ">Alphabet (A-Z)</option>
                <option value="Alp-ZA">Alphabet (Z-A)</option>
                <option value="Price-HL">Price (High-Low)</option>
                <option value="Price-LH">Price (Low-High)</option>
                <option value="Rate-HL">Rate (High-Low)</option>
                <option value="Rate-LH">Rate (Low-High)</option>
            </select>
        </div>
        <div className='meals'>
            {MealList.map((a,index)=>{
                var rateIcon = []
                var unrateIcon = []
                for (let i = 0; i < a.rate; i++) {
                    rateIcon.push(<img src={ratingIcon} alt="1" />)
                }
                for (let i = 0; i < 5-a.rate; i++) {
                    unrateIcon.push(<img src={unratingIcon} alt="1" />)
                }
                return index<showMore && <form className='meal' key={a.id} onSubmit={a=> {a.preventDefault()
                handleNotification()}}>
                    <img src={a.img} alt={a.name}/>
                    <div>
                        <div>
                            <div className='nameprice'>
                                <h4>{a.name}</h4>
                                <div className="line"></div>
                                <h4>${a.price-1}.99</h4>
                            </div>
                            <p>{a.dsc}</p>
                            <div className='nameprice'>
                                <h4>Rating</h4>
                                <div className='rating'>
                                    {rateIcon.map((el,index)=><div key={index}>{el}</div>)}
                                    {unrateIcon.map((el,index)=><div key={index}>{el}</div>)}
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>{setOrder({name:a.name,price:a.price,amount:1})}}>Order a Meal</button>
                    </div>
                </form>
            })}
        </div>
        {visibility && <button onClick={()=> {setShowMore(showMore+6)
        setVisibility(showMore+6<MealList.length)}
        } className='showMoreButton'>Show More</button>}
    </div>
  )
}

export default MealsPage
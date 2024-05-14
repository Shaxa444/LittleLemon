import React, { useEffect, useState } from 'react'
import deleteIcon from '../images/delete-icon.png'
import addIcon from '../images/add.png'
import swipe from '../images/swipe.png'

function Receipt({orders,setOrders}) {
    const [vision,setVision] = useState(false)
    const [totalCost,setTotalCost] = useState(0)
    useEffect(
        ()=>{
            setTotalCost(0)
            for (let i = 0; i < orders.length; i++) {
                const amount = orders[i].amount;
                const price = orders[i].price
                setTotalCost(a=>a+amount*(price-0.01))
            }
            setTotalCost(a=> Math.floor(a*100)/100)
        },[orders]
    )


  return (
    <div className={`receipt ${vision&& 'moveLeft'}`}>
        <div className="slideButton" onClick={()=> setVision(!vision)}>
            <img src={swipe} alt='swipe' className={`swipeImg ${vision&& 'rotateImg'}`} />
            <div>
                <h4>Your</h4>
                <h4>Orders</h4>
            </div>
        </div>
        <div className="esc" onClick={()=> setVision(!vision)}>x</div>
        <h2 className='slideButtonText'>Your Orders</h2>
        <div>
            {orders.map((element,index) =>
            <div className='boughtProducts' key={index}>
                <div className='nameprice'>
                    <h4><b>{index+1}.  </b>{element.name}</h4>
                    <div className="line"></div>
                    <h4 style={{wordSpacing:"10px"}}>{element.amount}x ${element.price-0.01}</h4>
                </div>
                <div className='editOrders'>
                    <span>(<h3>{element.amount}</h3> portion) (total: <h3>${Math.floor(element.amount*(element.price-0.01)*100)/100}</h3>)</span>
                    <div>
                        <button><img src={addIcon} alt="add" className='addIcon'/></button>
                        <button ><img src={deleteIcon} alt="delete" className='deleteIcon'/></button>
                    </div>
                </div>
                <hr />
            </div>
            )}
        </div>
            <div className='totalCost'>
                <h3>Total cost: </h3>
                <h3>${totalCost}</h3>
            </div>
    </div>
  )
}

export default Receipt
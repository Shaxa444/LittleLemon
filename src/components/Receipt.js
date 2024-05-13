import React, { useState } from 'react'
import deleteIcon from '../images/delete-icon.png'
import editIcon from '../images/edit-icon.png'
import swipe from '../images/swipe.png'

function Receipt({orders}) {
    const [vision,setVision] = useState(false)
  return (
    <div className={`receipt ${vision&& 'moveLeft'}`}>
        <div className="slideButton" onClick={()=> setVision(!vision)}>
            <img src={swipe} className={`swipeImg ${vision&& 'rotateImg'}`} />
            <div>
                <h4>Your</h4>
                <h4>Orders</h4>
            </div>
        </div>
        <div className="esc" onClick={()=> setVision(!vision)}>x</div>
        <h2>Your Orders</h2>
        <div>
            {orders.map((element,index) =>
            <div className='boughtProducts'>
                <div className='nameprice'>
                    <h4><b>{index+1}.  </b>{element.name}</h4>
                    <div className="line"></div>
                    <h4>${element.price-1}.99</h4>
                </div>
                <div className='editOrders'>
                    <button><img src={editIcon} alt="edit" className='editIcon'/></button>
                    <button><img src={deleteIcon} alt="edit" className='deleteIcon'/></button>
                </div>
                <hr />
            </div>
            )}
        </div>
    </div>
  )
}

export default Receipt
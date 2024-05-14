import { useState,useEffect } from 'react';

function TestimonalsPage() {
  const [data,setData] = useState(null)
  useEffect(
      ()=>{
          fetch('https://dummyjson.com/comments')
          .then(res => res.json())
          .then(a=>setData(a));
      },[]
  )
  return data===null? <div></div> : (
    <ul className='comments'>
        {data.comments.map((a,index)=>index<4&&
        <li key={a.user.id}>
            <div>
                <img src={require('../images/fish.jpg')} alt='fish' />
            </div>
            <div>
                <h4>My name is {a.user.username}</h4>
                <p>{a.body}</p>
            </div>
        </li>)}
    </ul>
  )
}

export default TestimonalsPage
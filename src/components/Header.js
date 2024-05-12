import React from 'react'
import image from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <section>
            <article>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterriarian restaurant having a traditional cousine which prouds itself of providing incredible meals!</p>
                <Link to={"/booking"}><button>Reserve a Table</button></Link>
            </article>
            <div>
              <img src={image} alt='homepage'/>
            </div>
        </section>
    </header>
  )
}

export default Header
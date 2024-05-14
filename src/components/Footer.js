import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <h2>Little Lemon</h2>
        <div>
          <div>
            <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/services">Services</Link>
              </li>
              <li>
                  <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                  <Link to="/menu">Order Online</Link>
              </li>
              <li>
                  <Link to="/booking">Reservation</Link>
              </li>
              <li>
                  <Link to="/booking">Login</Link>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom'

function Nav() {
    const [menu,setMenu] = useState(false)
    function toggler(){
        setMenu(!menu)
    }
  return (
    <nav>
        <Link to={"/"}>
            <img src={logo} alt="logo" />
        </Link>
        <div className='hamburgermenu' onClick={toggler}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className={`${menu? "" : "vision"}`}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Menu</a>
            </li>
            <li>
                <a href="#">Order Online</a>
            </li>
            <li>
                <a href="#">Reservation</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
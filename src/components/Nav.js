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
            <li>
                <Link to="/menu">Order Online</Link>
            </li>
            <li>
                <Link to="/booking">Reservation</Link>
            </li>
            <li>
                <Link to="#">Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
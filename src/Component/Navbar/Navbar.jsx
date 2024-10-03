import React from 'react'
import './Navbar.scss'

const Navbar=()=> {
  return (
    <div className='navbar'>
        <div className="navContainer">
   <span className="logo">Resortbooking</span>
    <div className="nav items">
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>

    </div>
        </div>

    </div>
  )
}

export default Navbar
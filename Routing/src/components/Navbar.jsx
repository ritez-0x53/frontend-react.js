import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar' >
        
        <div className="logo">
            <span>React-Router</span>
        </div>

        <nav>
            <NavLink className={(e)=> { return e.isActive ?"red link": "link"}} to={"/"} >Home</NavLink>
            <NavLink className={(e)=> { return e.isActive ?"red link": "link"}} to={"/about"} >About</NavLink>
            <NavLink className={(e)=> { return e.isActive ?"red link": "link"}} to={"/contact"} >Contact</NavLink>
            <NavLink className={(e)=> { return e.isActive ?"red link": "link"}} to={"/user"} >User</NavLink>
        </nav>

    </div>
  )
}

export default Navbar
import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar' >
        <div className="logo">
        <span >iTask</span>
        </div>

        <ul>
            <li>Home</li>
            <li>Tasks</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar
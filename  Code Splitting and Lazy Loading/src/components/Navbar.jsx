import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className='navbar' >

    <div className="logo">
        <span>React.js</span>
    </div>

    <nav>
        <Link className='link' to={"/"} >Home</Link>
        <Link className='link' to={"/About"} >About</Link>
        <Link className='link' to={"/Posts"} >Posts</Link>
    </nav>

    </div>
  )
}

export default Navbar
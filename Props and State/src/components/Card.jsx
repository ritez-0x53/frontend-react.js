import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className='card' >
        <img src="https://imgs.search.brave.com/kYX9XU9IcigTVm19jlgppcP4jO2gjWE6LiDwIVSE-AM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9jb2xvcmZ1bC1t/ZWFkb3ctZmxvd2Vy/cy11bmRlci10aGUt/bW91bnRhaW5zLWZy/ZWUtaW1hZ2UuanBl/Zz93PTYwMCZxdWFs/aXR5PTgw" alt="image" />
        <h2 style={{
            // textAlign:"center"
        }} >{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
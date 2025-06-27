import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigateHome() {
    const navigate = useNavigate();
  return (
    <p style={{
        background:"red",
        padding:"10px",
        color:"white",
        marginTop:"100px"
    }} onClick={ ()=> {navigate('/')} } >
        Go To Home.
    </p>
  )
}

export default NavigateHome
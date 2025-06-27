import React from 'react'
import { useLocation } from 'react-router-dom'

function GetLocation() {
    const location = useLocation();
    console.log(location)
  return (
    <>
    <p>{location.pathname}</p>
    </>
  )
}

export default GetLocation
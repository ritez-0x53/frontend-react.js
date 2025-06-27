import React from 'react'
import { useParams } from 'react-router-dom'
import NavigateHome from './NavigateHome';

function UserName() {
    const params = useParams();
  return (
    <>
    <h1>
        Username is <span style={{color:"red"}} > {params.username} </span>
    </h1>
    <NavigateHome/>
    </>
  )
}

export default UserName
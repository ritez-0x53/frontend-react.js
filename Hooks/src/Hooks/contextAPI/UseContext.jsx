import React, { useEffect, useRef } from 'react'
import Parent from './Parent'
import { useContext } from 'react'
import myContext from './context'

function UseContext() {
    const {name , setName , number} = useContext(myContext);
    const nameRef = useRef("");

    function handleClick(){
        setName(val => nameRef.current.value);
    }

    useEffect(()=> { nameRef.current.value = "" } ,[name])
  return (
    <div>
        <h2>Use Context Component</h2>
        <input type="text" ref={nameRef} />
        <button onClick={handleClick} >change</button>
        <h2>Number is {number}</h2>
        <Parent />
    </div>
  )
}

export default UseContext
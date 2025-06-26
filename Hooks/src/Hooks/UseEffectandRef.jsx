import React, { useEffect, useRef, useState } from 'react'



// useEffect hooks in react

function UseEffectAndRef() {

    const [count , setCount] = useState(0);
    const [num , setNum] = useState(100);
    
    const inputRef = useRef(); 
    const numRef = useRef(0);

    // Case 1 : runs on every render...
    useEffect(()=> {
        console.log("\nI run on every render...");
        numRef.current = numRef.current + 1;
        console.log(numRef.current)
    }) 

    // Case 2 : runs only once on first render ...
    useEffect(()=> {
        console.log("I run only once on first render...")
        inputRef.current.style.backgroundColor = "red"
    } , [])

    // Case 3 : runs on certain value or state change
    useEffect(()=> {
        console.log("count value changed - "+count)
        setNum(val =>val+1);
    } , [count])

    useEffect(()=> {
        console.log("num value changed - "+num)
    } , [num])

  return (
    <div>

        <button onClick={()=> {setCount(val=>val+1)}} className='count_contianer' >Count is {count}</button>

        <input ref={inputRef} value={num} disabled />

    </div>
  )
}

export default UseEffectAndRef;
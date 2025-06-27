import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [num , setNum] = useState(0);
  const [num2 , setNum2] = useState(0);

  // all useeffect hook runs on first render of components

  // Case 1 : runs on every render of the components
  useEffect(()=> {
    alert("runs on every render !")
  })

  // Case 2 : runs only once on initial or first render
  useEffect(()=> {
    alert("I run only once on first render")
  } ,[])

  // Case 3 : runs only on certain state or value change
  useEffect(()=> {
    alert("I run when num state change !")
    setNum2(val => val + 10)
  },[num])

  useEffect(()=> {
    alert("I run when num2 changes")
  } , [num2])

  return (
    <div>

    <button onClick={()=> {setNum(val => val+1)}} >First Count is {num}</button>
    <hr />
    <button>Second Count is {num2}</button>
    </div>
  )
}

export default UseEffect
import React, { useCallback, useState } from 'react'
import Component0 from './Component0';
import Component1 from './Component1';

function UseCallback() {

    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(100);

    // function tempFunc(){
    //     return "0000"
    // }

    const tempFunc = useCallback(() => {
        return "0000"+count;
    } ,[count])


  return (
    <>
        <h1>Hi This is Callback Hook</h1>
        <Component0 count={count} setCount={setCount} temp={"hello"}/>
        <Component1 tempFunc={tempFunc}  />
        <button onClick={()=> setCount(val => val+1)} >Count:{count}</button>
        <br />
        <button onClick={()=> setCount2(val => val+10)} >Count2:{count2}</button>
    </>
  )
}

export default UseCallback
import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [random , setRandom] = useState(10);
    const [random2 , setRandom2] = useState(100)

    function slowFunction(num) {
        // fake slow function - high computing
        for(let i = -1e9 ; i < 1e9 ; i++) {
        }
        return num ** 3;
    }

    // const num = slowFunction(random);

    // this is memoized , it will only run when random dependencies changes..
    // not effect other code .
    const num = useMemo(() => slowFunction(random)  , [random]);

    const num2 = random2;

    const handleHighCompute = () => {
        setRandom(val => Math.ceil(Math.random() * 10));
    }

    const handleNormalCompute = () => {
        setRandom2(val => Math.ceil(Math.random() * 10))
    }

  return (
    <>  
        <h1>UseMemo Hook Component</h1>
        <button onClick={handleHighCompute} >High Compute Generator - {num} </button>
        <br />
        <button onClick={handleNormalCompute} >No High Compute Generator - {num+num2}</button>
    </>
  )
}

export default UseMemo
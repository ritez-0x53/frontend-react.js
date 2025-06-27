import React, { useRef, useState } from 'react'

function UseRef() {
    
    const [count , setCount] = useState(0);
 
    const headRef = useRef();
    const inputRef = useRef();
    
    let num = 0;
    let numRef = useRef(0);

    
    const handleFocus = (e) => {
        inputRef.current.focus();
    }

    const handleTextChange = () => {
        headRef.current.textContent = inputRef.current.value;
        headRef.current.style.backgroundColor = inputRef.current.value;
    }

    return (
    <>
    <div className="container">
        <h1 ref={headRef} >I am a heading text</h1>
    </div>


    <div className="container">
        <input ref={inputRef} id='textInput' placeholder='enter text' type="text"  />
    </div>

    <div className="container">
        <button onClick={handleFocus} >Focus Input</button>
        <button onClick={handleTextChange} >change heading text</button>
        <br />
        <hr />
        <br />
        <button onClick={()=> {num = num+1}} > traditional variable : {num}</button>
        {/* since component dont render on ref change ,thats why ref value changed but not populated
        i will populate only when rerender  */}
        <button onClick={()=> {numRef.current = numRef.current+1}} >Ref : {numRef.current}</button>
        <br />
        <button onClick={()=> {setCount(count+1)}} >State : {count}</button>
    </div>

    
    </>
  )
}

export default UseRef
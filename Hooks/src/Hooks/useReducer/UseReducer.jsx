import React from 'react'
import { useReducer } from 'react'


const reducer = (state,action) => {
    switch(action) {
        case "INCREMENT" :
            return state = state + 1;
        case "DECREMENT" :
            return state = state - 1;
        case "RESET" :
            return state = 0
    }   
}

const initialState = 0;



function UseReducer() {

    const [state , dispatch ] = useReducer(reducer , initialState);

  return (
    <div>
        <h1>Count : {state}</h1>

        <button onClick={()=> {dispatch("INCREMENT")}} >Increment</button>
        <button onClick={()=> {dispatch("DECREMENT")}} >Decrement</button>
        <button onClick={()=> {dispatch("RESET")}} >Reset</button>
    </div>
  )
}

export default UseReducer



import React, { memo } from 'react'
import useCounterStore from '../hooks/counter'

function Counter() {
    const count = useCounterStore( state => state.count)
    const decrement = useCounterStore( state => state.decrement)
  return (
    <div>
        <h1>CounterX : {count}</h1>
        <button onClick={decrement} >Decrement</button>
    </div>
  )
}

export default memo(Counter) 
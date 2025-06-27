import React, { useContext } from 'react'
import myContext from './context'


function Child() {
    const nameContext = useContext(myContext);
  return (
    <div>
        <h2>Child Component</h2>
        <button>{nameContext.name}</button>
    </div>
  )
}

export default Child
import React, { memo } from 'react'

function Component0({count , setCount , temp}) {
    alert("component0 re-rendering !!!")
  return (
    <>
        <h1>Temp value : {temp}</h1>
    </>
  )
}

export default memo(Component0);
import React, { memo } from 'react'

function Component1({tempFunc}) {


    alert("component 1 rendered !!!")

  return (
    <>
        <h1>temp function value : {tempFunc()} </h1>
    </>
  )
}

export default memo(Component1);
// export default Component1;
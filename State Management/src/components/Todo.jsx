import React from 'react'

function Todo({image , slug}) {
  return (
    <div className='todo' >

        {/* <img src={image} alt="" /> */}
        <p> {slug} </p>

    </div>
  )
}

export default Todo
import React from 'react'

function List({title , description}) {
  return (
    <div className='todo' >
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default List
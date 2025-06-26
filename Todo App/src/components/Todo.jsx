import React from 'react'

function Todo(props) {
  return (
    <div className='todo' >
      <p className='todo_name' >{props.name}</p>
      
      <div className="action_btn">
        <button className='edit_btn' >Edit</button>
        <button className='delete_btn' >Delete</button>
      </div>
    </div>
  )
}

export default Todo
import React from 'react'

function Todo(props) {

  const { setIsEdit,setInput,setEditId,inputRef, setTodos, id, name, isDone,setIsDone } = props

  function handleDelete(e) {
    setTodos((val) => {
      return val.filter((elem, ind) => {
        return ind != id;
      })
    })
  }

  function handleEdit(e) {
    setIsEdit(true);
    setEditId(id);
    console.log("handle edit ");
    inputRef.current.focus();
    setInput(name)
  }

  function handleTask(){
    // alert()
    setTodos((val) => {
      const tempTodos = [...val];
      tempTodos[id].isDone = isDone ? false : true
      return [...tempTodos];
    })

  }

  return (
    <div className={"todo"} >
      {
        <p onDoubleClick={handleTask} className={isDone ? "todo_name done" : "todo_name"} >{name}</p>
      }


      <div className="action_btn">
        <button onClick={handleEdit} className='edit_btn' >Edit</button>
        <button onClick={handleDelete} className='delete_btn' >Delete</button>
      </div>
    </div>
  )
}

export default Todo
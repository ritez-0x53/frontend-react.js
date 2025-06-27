import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

function App() {

  const [todos, setTodos] = useState();
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId , setEditId] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    const tempTodo = localStorage.getItem("todos");
    tempTodo && setTodos(JSON.parse(tempTodo));
  }, [])

  useEffect(() => {
    todos && localStorage.setItem("todos", JSON.stringify(todos));

    setInput(val => "");
  }, [todos])

  function handleInput(e) {
    setInput(val => e.target.value)
  }

  function handleAdd(e) {
    if (input.length <= 0) {
      return setIsEmpty(true)
    }
    setTodos(val => [{ name: input, isDone: false }, ...val])
  }

  function handleEditSave(){
     if (input.length <= 0) {
      return setIsEmpty(true)
    }
    setIsEdit(false)
    const tempTodo = [...todos];
    tempTodo[editId].name = input
    setTodos(val => tempTodo);
    setInput("")
  }

  return (
    <>
      <Navbar />
      <div id='container' >
        <div className='input_container' >
          <input ref={inputRef} value={input} onInput={handleInput} className='todo_input' type="text" name='todo' />
          <button onClick={!isEdit ? handleAdd : handleEditSave} className='add_btn'>{!isEdit ? "Add" : "Save"}</button>
          <small>{isEmpty && "todo cannot be empty"}</small>
        </div>
        {
          todos && todos.map((todo, ind) => {
            return <Todo setIsEdit={setIsEdit} setInput={setInput} setEditId={setEditId} inputRef={inputRef} setTodos={setTodos} id={ind} name={todo.name} isDone={todo.isDone} set key={ind} />
          })
        }

      </div>
    </>
  )
}

export default App

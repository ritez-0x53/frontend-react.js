import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    setTodos(val => JSON.parse(todos));
  }, [])

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    console.log(todos)
    setInput(val => "");
  }, [todos])

  function handleInput(e) {
    setInput(val => e.target.value)
  }

  function handleAdd(e) {
    if (input.length <= 0) {
      return setIsEmpty(true)

    }
    setTodos(val => [{ name: input, isDone: false } , ...val])
  }

  return (
    <>
      <Navbar />
      <div id='container' >
        <div className='input_container' >
          <input value={input} onInput={handleInput} className='todo_input' type="text" name='todo' />
          <button onClick={handleAdd} className='add_btn'>Add</button>
          <small>{isEmpty && "todo cannot be empty"}</small>
        </div>
        { 
          todos.map((todo, ind) => {
            return <Todo key={ind} id={ind} name={todo.name} isDone={todo.isDone} />
          })
        }

      </div>
    </>
  )
}

export default App

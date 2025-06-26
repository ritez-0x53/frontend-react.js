import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import List from './components/List';

function App() {

  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([
    { title: "first todo", description: "first todo description 1" },
    { title: "second todo", description: "second todo description 2" },
    { title: "third todo", description: "third todo description 3" },
    { title: "fourth todo", description: "fourth todo description 4" },
  ])

  return (
    <>
      {/* conditional rendering... */}
      <div className='con_render' >
        {show && <Button name={"Temp Button 1"} />}
        {show ? <Button name="Temp Button 2" /> : ""}
        <br />
        <button onClick={() => { setShow(!show) }} >{show ? "unshow" : "show"}</button>
      </div>

      {/* list rendering */}
      <div className='todo_container' >

        {todos.map((todo , index ,arr)=> {
          return <List  key={todo.title} title={todo.title} description={todo.description} />
        })}

      </div>
    </>
  )
}

export default App

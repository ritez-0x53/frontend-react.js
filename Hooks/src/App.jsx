import { createContext, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import UseEffect from './Hooks/useEffect/UseEffect'
import UseRef from './Hooks/useRef/UseRef'
import UseContext from './Hooks/contextAPI/UseContext'
import myContext from './Hooks/contextAPI/context'
import UseMemo from './Hooks/useMemo/UseMemo'

function App() {


  const [name , setName] = useState("Ritezverse")

  return (
    <>
    {/* <UseEffect/> */}
    {/* <UseRef/> */}

    {/* <myContext.Provider value={{name : name , setName : setName , number : 12}}>
      <h2>App Component</h2>
    <UseContext/>
    </myContext.Provider> */}
  
      {/* <UseMemo/> */}

      


    </>
  )
}

export default App

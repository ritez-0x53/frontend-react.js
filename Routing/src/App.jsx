import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import UserName from './components/UserName'
import Error from './components/Error'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/> <Home/> </>
    }, 
    {
      path:"/about",
      element: <><Navbar/> <About/></>
    }, 
    {
      path:"/contact",
      element: <><Navbar/> <Contact/> </>
    }, 
    {
      path:"/user/",
      element: <><Navbar/> <User/></>
    }, 
    {
      path:"/user/:username",
      element: <><Navbar/> <UserName/></>
    }, 
    {
      path:"*",
      element: <><Navbar/> <Error/></>
    }, 
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

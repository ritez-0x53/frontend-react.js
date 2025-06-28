import React, { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './components/About';
// import Posts from './components/Posts';
// import Home from './components/Home';


const Home = lazy(()=> import("./components/Home"))
const About = lazy(()=> import("./components/About"))
const Posts = lazy(()=> import("./components/Posts"))


const router = createBrowserRouter([
  {
    path :"/",
    element : <> <Navbar/> <Home/> </>
  } ,
  {
    path :"/About",
    element : <> <Navbar/> <About/> </>
  } ,
  {
    path :"/Posts",
    element : <> <Navbar/> <Posts/></>
  } ,
  {
    path :"*",
    element : <> <Navbar/> <div>Error Page not found 404</div> </>
  } 
])


function App() {
  const [count , setCount ] = useState(0);

  return (
    <div id='app' >
      <Suspense fallback={<h1>Loading ...</h1>} >
      <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
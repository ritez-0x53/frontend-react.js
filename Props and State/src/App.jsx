import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <div className='app-container' >
      {/* navbar component */}
      <Navbar />
      
      <div className="cards_container">
        {/* passing props title and desc in Card component */}
        <Card title={"Card-1"} desc={"Lorem ipsum dolor sit amet"} />
        <Card title="Card-2" desc="Lorem ipsum dolor sit amet " />
        <Card title="Card-3" desc="Lorem ipsum dolor sit amet " />
        <Card title="Card-4" desc="Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet " />
        <Card title="Card-5" desc="Lorem ipsum dolor sit amet " />
      </div>

      {/* footer component */}
      <Footer />
    </div>
  )
}

export default App

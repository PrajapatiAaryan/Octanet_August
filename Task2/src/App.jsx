import { useState } from 'react'
import Todotask from './components/Todotask'
import bgimg from './assets/bg1.jpg'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <div className=" min-h-screen bg-cover">
      <Navbar/>
      <Todotask/>
    </div>
          
    </>
  )
}

export default App

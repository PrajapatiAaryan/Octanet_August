import { useState } from 'react'
import Todotask from './components/Todotask'
import bgimg from './assets/bg1.jpg'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <div className="bg-gradient-to-r from-gray-400 to-neutral-200 min-h-screen ">
      <Navbar/>
      <Todotask/>
    </div>
          
    </>
  )
}

export default App

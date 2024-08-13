import React from 'react'

const Navbar = () => {
  return (

       <div className='bg-gray-400 px-3 flex justify-between py-4 border border-black shadow-md shadow-gray-600 sticky w-[100vw] '>
        <div className="logo lg:text-[2rem] text-xl lg:pl-24 font-bold bg-gradient-to-t from-gray-900 to-gray-700 bg-clip-text text-transparent">
          TODOManager
        </div>
        <ul className='flex lg:gap-10 gap-2 list-none justify-center items-center lg:text-[1.5rem] text-lg lg:pr-28 bg-gradient-to-t from-gray-500 to-gray-400 bg-clip-text text-transparent'>
          <li>Home</li>
          <li>About</li>
        </ul>
       </div>
  )
}

export default Navbar

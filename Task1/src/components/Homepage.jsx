import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Homepage = () => {
  return (
    <div className='mt-10 lg:mt-20  '>
       <div>
             <div className='text-3xl md:text-4xl lg:text-6xl flex justify-center items-center py-2 px-5 text-center'>
              <h1 className='md:w-[60%]'> VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
              {" "}
          for developers</span></h1>
             </div>
             <div className='flex justify-center items-center pt-1 px-3  text-center text-gray-400 text-xs md:text-sm'>
              <p className='md:w-[58%] w-[100vw]'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
             </div>
             <div className='flex gap-3 justify-center items-center mt-10 '>
              <button className='bg-gradient-to-r from-orange-500 to-orange-800 flex justify-center items-center py-3 border border-black rounded-md px-5 shadow-sm shadow-white'> Start for free</button>
              <button className=' bg-neutral-950  flex justify-center items-center py-3 border border-black rounded-md px-5 shadow-sm shadow-white'>Documentation</button>
             </div>

             <div className=' flex gap-6 justify-center items-center mt-10'>
               <video autoPlay loop muted   className='w-[40%] border-orange-400 shadow-orange-400 mx-2 my-4 rounded-lg border' >
               <source src={video1} type='video/mp4' />
               </video>
               <video autoPlay loop muted   className='w-[40%] border-orange-400 shadow-orange-400 mx-2 my-4 rounded-lg border' >
               <source src={video2} type='video/mp4' />
               </video>
             </div>
       </div> 
    </div>
  )
}

export default Homepage

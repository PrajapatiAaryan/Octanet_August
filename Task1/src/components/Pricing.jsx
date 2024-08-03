import React from 'react'
import { CheckCircle2 } from "lucide-react";
const Pricing = () => {
  return (
    <div className='mt-10 pt-6'>
      <div>
        <div className=' flex justify-center  items-center lg:pt-14 pb-4 text-3xl md:text-4xl lg:text-5xl'>
          <h1>Pricing</h1>
        </div>
        <div className='main px-2 py-2 mx-10 flex  flex-col lg:flex-row justify-center items-center gap-7'>
          <div className='border border-neutral-800 shadow-sm shadow-neutral-700 h-[500px] w-[300px] flex flex-col justify-center items-center rounded-xl'>
            <div className='flex flex-col pr-24 gap-7 pb-5'>
               <h1 className='text-4xl'>Free</h1>
               <h1 className='text-4xl'>$0 <span className='text-sm text-gray-500'>/month</span></h1>
            </div>
               <ul className=''>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private board sharing</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>5 Gb Storage</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Web Analytics</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private Mode</li>   
               </ul>
               <div className='flex justify-center items-center w-full mt-6'>
                <button className='border border-red-400 mx-6 flex justify-center items-center  py-2 font-medium w-full rounded-lg shadow-red-400 shadow-sm '>Subscribe</button>
               </div>
          </div>
          <div className='border border-neutral-800 shadow-sm shadow-neutral-700 h-[500px] w-[300px] flex flex-col justify-center items-center rounded-xl'>
            <div className='flex flex-col pr-24 gap-7 pb-5'>
               <h1 className='text-4xl'>Pro <span className='text-sm bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text'>(Most Popular)</span></h1>
               <h1 className='text-4xl'>$10 <span className='text-sm text-gray-500'>/month</span></h1>
            </div>
               <ul className=''>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private board sharing</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>10 Gb Storage</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Web Analytics (Advance)</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private Mode</li>   
               </ul>
               <div className='flex justify-center items-center w-full mt-6'>
                <button className='border border-red-400 mx-6 flex justify-center items-center  py-2 font-medium w-full rounded-lg shadow-red-400 shadow-sm '>Subscribe</button>
               </div>
          </div>
          <div className='border border-neutral-800 shadow-sm shadow-neutral-700 h-[500px] w-[300px] flex flex-col justify-center items-center rounded-xl'>
            <div className='flex flex-col pr-7 gap-7 pb-5'>
               <h1 className='text-4xl'>Enterprise</h1>
               <h1 className='text-4xl'>$200 <span className='text-sm text-gray-500'>/month</span></h1>
            </div>
               <ul className=''>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private board sharing</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Unlimited Storage</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>High Performance Network</li>
                <li className='flex py-4'><span className='w-8'><CheckCircle2/></span>Private Mode</li>   
               </ul>
               <div className='flex justify-center items-center w-full mt-6'>
                <button className='border border-red-400 mx-6 flex justify-center items-center  py-2 font-medium w-full rounded-lg shadow-red-400 shadow-sm '>Subscribe</button>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

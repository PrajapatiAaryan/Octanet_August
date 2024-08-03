import React from 'react'
import { CheckCircle2 } from "lucide-react";
import codeimg from '../assets/code.jpg'

const Workflow = () => {
  return (
    <div className='mt-20 '>
       <div>
           <div className='flex justify-center items-center text-center text-3xl md:text-4xl lg:text-5xl pb-10 lg:pr-24'>
            <h1> Accelerate your{" "}<span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>coding workflow.</span></h1>
           </div>
           <div className='main  flex lg:flex-row flex-col justify-center items-center px-3 py-5 mx-6  gap-5'>
             <div className="left  lg:w-1/3 flex justify-center items-center pb-14">
              <div className='lg:h-[430px] lg:w-[550px] w-full' >
                <img src={codeimg} alt="this is a code img"   />
              </div>
             </div>
             <div className="right flex flex-col gap-6  h-[500px] justify-start">
              <div className='flex  gap-8 lg:w-[80%]'>
                <div className='flex items-center justify-center h-9 bg-neutral-900 w-9 py-2 px-2 rounded-full text-green-500'>
                  <CheckCircle2/>
                </div>
                <div className='flex flex-col gap-3 pt-1 '>
                  <h1 className='font-medium'>Code merge made easy</h1>
                  <p className='text-neutral-500'>Track the performance of your VR apps and gain insights into user behavior.</p>
                </div>
              </div>
              <div className='flex  gap-8 lg:w-[80%]'>
                <div className='flex items-center justify-center h-9 bg-neutral-900 w-9 py-2 px-2 rounded-full text-green-500'>
                  <CheckCircle2/>
                </div>
                <div className='flex flex-col gap-3 pt-1 '>
                  <h1 className='font-medium'>Review code without worry</h1>
                  <p className='text-neutral-500'>Track the performance of your VR apps and gain insights into user behavior.</p>
                </div>
              </div>
              <div className='flex  gap-8 lg:w-[80%]'>
                <div className='flex items-center justify-center h-9 bg-neutral-900 w-9 py-2 px-2 rounded-full text-green-500'>
                  <CheckCircle2/>
                </div>
                <div className='flex flex-col gap-3 pt-1 '>
                  <h1 className='font-medium'>AI Assistance to reduce time</h1>
                  <p className='text-neutral-500'>Track the performance of your VR apps and gain insights into user behavior.</p>
                </div>
              </div>
              <div className='flex  gap-8 lg:w-[80%]'>
                <div className='flex items-center justify-center h-9 bg-neutral-900 w-9 py-2 px-2 rounded-full text-green-500'>
                  <CheckCircle2/>
                </div>
                <div className='flex flex-col gap-3 pt-1 '>
                  <h1 className='font-medium'>Share work in minutes</h1>
                  <p className='text-neutral-500'>Track the performance of your VR apps and gain insights into user behavior.</p>
                </div>
              </div>
             </div>
           </div>
       </div>
    </div>
  )
}

export default Workflow

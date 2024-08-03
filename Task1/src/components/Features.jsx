import React from 'react'
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const Features = () => {
  return (
    <div className=''>
      <div>
         <div className='flex justify-center items-center '>
          <h1 className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text pt-9'>
          Feature
          </h1>
         </div>
         <div className='flex justify-center items-center text-center text-3xl md:text-4xl lg:text-6xl mt-10 md:mt-20'>
          <h1>Easily build{" "}<span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>Your code</span></h1>
         </div>
         <div className="main flex justify-center items-center md:mt-20 mt-6">

         <div className='main1 flex justify-center items-center flex-wrap  md:gap-7 py-5 px-3 md:w-[80vw]   gap-2'>
                <div className='first flex justify-center   gap-4 lg:w-[24vw]  px-2 py-2 '>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <BotMessageSquare/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Drag-and-Drop Interface</h1>
                        <p className='text-gray-500 font-medium'>Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.</p>
                      </div>
                </div>
                <div className='first flex justify-center    gap-4 lg:w-[24vw]  px-2 py-2'>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <Fingerprint/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Multi-Platform Compatibility</h1>
                        <p className='text-gray-500 font-medium'>Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.</p>
                      </div>
                </div>
                <div className='first flex justify-center    gap-4 lg:w-[24vw]  px-2 py-2'>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <ShieldHalf/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Built-in Templates</h1>
                        <p className='text-gray-500 font-medium'>Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.</p>
                      </div>
                </div>
                <div className='first flex justify-center    gap-4 lg:w-[24vw]  px-2 py-2'>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <BatteryCharging/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Real-Time Preview</h1>
                        <p className='text-gray-500 font-medium'>Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.</p>
                      </div>
                </div>
                <div className='first flex justify-center    gap-4 lg:w-[24vw]  px-2 py-2'>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <PlugZap/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Collaboration Tools</h1>
                        <p className='text-gray-500 font-medium'>Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
                      </div>
                </div>
                <div className='first flex justify-center    gap-4 lg:w-[24vw]  px-2 py-2'>
                      <div className='bg-neutral-900 text-orange-700 rounded-full px-2  h-10 w-10 flex justify-center items-center'>
                       <GlobeLock/>
                      </div>
                      <div className='flex flex-col justify-center  gap-5 '> 
                        <h1 className='font-medium pt-2'>Analytics Dashboard</h1>
                        <p className='text-gray-500 font-medium'>Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.</p>
                      </div>
                </div>
                     
         </div>
         </div>
      </div>
       
    </div>
  )
}

export default Features

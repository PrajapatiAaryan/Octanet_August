import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'

const Testinomial = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center text-3xl md:text-4xl lg:text-5xl pt-10 pb-7'>
          <h1>What people are saying</h1>
        </div>
        <div className='flex flex-wrap  px-5 py-4 mx-7 w-[80vw] gap-4'>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg md:h-[220px]'>
               <p className='pb-5 text-neutral-400'>I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user1} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'>John Doe</h1>
                  <h1 className='text-neutral-600 italic'>Stellar Solutions</h1>
                </div>
               </div>
           </div>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg md:h-[220px]'>
               <p className='pb-5 text-neutral-400'>I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user2} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'>Jane Smith</h1>
                  <h1 className='text-neutral-600 italic '>Blue Horizon Technologies</h1>
                </div>
               </div>
           </div>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg'>
               <p className='pb-5 text-neutral-400'>Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user3} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'>David Johnson</h1>
                  <h1 className='text-neutral-600 italic'>Quantum Innovations</h1>
                </div>
               </div>
           </div>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg'>
               <p className='pb-5 text-neutral-400'>Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user4} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'> Ronee Brown</h1>
                  <h1 className='text-neutral-600 italic'> Fusion Dynamics</h1>
                </div>
               </div>
           </div>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg md:h-[220px]'>
               <p className='pb-5 text-neutral-400'>I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user5} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'> Michael Wilson</h1>
                  <h1 className='text-neutral-600 italic'>Visionary Creations</h1>
                </div>
               </div>
           </div>
           <div className='border border-neutral-800 lg:w-[24vw] px-4 py-5 rounded-lg md:h-[220px]'>
               <p className='pb-5 text-neutral-400'>The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.</p>
               <div className='flex gap-7'>
                <span className=''> <img src={user6} alt="JOHN"  className='h-10 w-10 rounded-full'/></span>
                <div>
                  <h1 className='text-lg text-neutral-400'>Emily Davis</h1>
                  <h1 className='text-neutral-600 italic'>Synergy Systems</h1>
                </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Testinomial

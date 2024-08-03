import React from 'react'

const Footer = () => {
  return (
  <footer className='mt-20  border-t md:mx-20 lg:mx-40 border-neutral-700 md:w-[77vw]'>
    <div className='grid grid-cols-2 md:grid-cols-3  '>
       <div className='  px-3 py-3 pt-6 '>
        <h1 className='pb-3 font-medium'>Resources</h1>
        <ul className='list-none text-neutral-400 flex flex-col gap-1'>
          <li>Getting started</li>
          <li>Documentation</li>
          <li>Tutorials</li>
          <li>API Reference </li>
          <li>Community Forums</li>
        </ul>
       </div>
       <div className='  px-3 py-3 pt-6'>
        <h1 className='pb-3 font-medium'>Platform</h1>
        <ul className='list-none text-neutral-400 flex flex-col gap-1'>
          <li> Features</li>
          <li>Supported Devices</li>
          <li>System Requirements</li>
          <li>Downloads</li>
          <li>Release Notes</li>
        </ul>
       </div>
       <div className='  px-3 py-3 pt-6'>
        <h1 className='pb-3 font-medium'>Community</h1>
        <ul className='list-none text-neutral-400 flex flex-col gap-1'>
          <li> Events</li>
          <li>Meetups</li>
          <li>Conferences</li>
          <li>Hackathons</li>
          <li>Jobs</li>
        </ul>
       </div>
    </div>
  </footer>
  )
}

export default Footer

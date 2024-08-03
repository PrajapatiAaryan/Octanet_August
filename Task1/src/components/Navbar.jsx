import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const handletoggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <>
   
    <nav className="sticky top-0 py-3 z-50 backdrop-blur-2xl border-b bg-transparent ">
      <div className="flex justify-between items-center px-4 pl-4">
        <div className="logo flex gap-1 justify-center items-center">
          <img src={logo} alt="" className="h-8 w-8"/>
           <span>VirtualR</span></div>
         
        <div className="list">
          <ul className=" hidden lg:flex gap-6 justify-center items-center ">
            <li className="cursor-pointer"><Link to="feature" smooth={true} duration={500}>Features</Link></li>
            <li className="cursor-pointer"><Link to="workflow" smooth={true} duration={500}>Workflow</Link></li>
            <li className="cursor-pointer"><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li className="cursor-pointer"><Link to="testinomial" smooth={true} duration={500}>Testinomials</Link></li>
           
          </ul>
        </div>
        <div className="btns  hidden lg:flex justify-center items-center gap-6 pr-12  ">
          <button className="  border border-black flex justify-center items-center py-2 px-3 bg-neutral-900 shadow-white shadow-sm rounded-lg">sign in</button>
          <button className="border border-black flex justify-center items-center py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 shadow-white shadow-sm rounded-lg">create an account</button>
        </div>
          <button className="lg:hidden block text-white" onClick={handletoggle}>
            {mobileDrawerOpen?<X/>:<Menu/>}
          </button>
      </div>
      {mobileDrawerOpen&& 
      <div className="mobiledrwwer">
      <ul className="flex lg:hidden gap-6 justify-center flex-col pl-8 pt-5">
      <li className="cursor-pointer"><Link to="feature" smooth={true} duration={500}>Features</Link></li>
            <li className="cursor-pointer"><Link to="workflow" smooth={true} duration={500}>Workflow</Link></li>
            <li className="cursor-pointer"><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li className="cursor-pointer"><Link to="testinomial" smooth={true} duration={500}>Testinomials</Link></li>
          </ul>
      </div>
      }
    </nav>
    </>
  );
};

export default Navbar;

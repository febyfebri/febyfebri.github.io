import React from 'react';
import Lottie from 'react-lottie';
import logo from '../assets/F.json'
import '../App.css';

function Navbar() {
  
  const logoAnimation = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className="navbar pb-5 relative z-10 max-lg:navbar">
      <div className="hidden max-md:flex navbar-start max-lg:flex navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href='/' className='italic'>Project .01</a></li>
          <li><a href='/' className='italic'>Blog .02</a></li>
          <li><a href='/' className='italic'>Contact .03</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-start mr-4 max-lg:navbar-end">
        <div className='flex items-center'>
          <div className='h-12 w-12 border-gray-700 rounded-md border-4 rotate-45 relative z-10 mt-4'>
          </div>
            <div className='absolute z-0'>
              <Lottie options={logoAnimation} width={48} height={48}/>
            </div>
        </div>
      </div>
      <div className="navbar-end max-lg:hidden">
        <ul className="space-x-4 px-4 justify-items-end contents">
          <li><a href='/' className='text-md italic hover:text-amber-600'>Project .01</a></li>
          <li><a href='/' className='text-md italic hover:text-amber-600'>Blog .02</a></li>
          <li><a href='mailto:febrifeby468@gmail.com' className='text-md italic hover:text-amber-600'>Contact .03</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
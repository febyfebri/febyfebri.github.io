import React from 'react';
import project1 from '../assets/project1.png';
import projcet2 from '../assets/project2.png';

function Project() {
  return (
    <div className="min-h-screen place-items-start mt-36">
      <h1 className='font-bold text-4xl mt-4 max-sm:text-2xl'>Selected Project</h1>
      <div className='pt-6'>
        <img src={project1} alt='project1' className='rounded-md' />
        <p className='font-bold mt-5'>Nyepeda Smart Route Mobile App</p>
      </div>
      <div className='pt-10'>
        <img src={projcet2} alt='project1' className='rounded-md' />
        <p className='font-bold mt-5'>Crypto Finance Web Application</p>
      </div>
    </div>
  )
}

export default Project
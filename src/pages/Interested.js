import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Interested() {
  return (
    <div className='w-h-screen bg-base-300 mt-20 rounded-sm mb-20'>
      <div className='flex flex-row p-12 max-sm:block'>
        <div className='flex flex-1 basis-1/2 items-center p-2 max-sm:flex-none'>
          <h1 className='font-bold text-xl'>Interested working with me ?</h1>
        </div>
        <div className='flex flex-1 basis-1/2 p-2 place-content-end max-sm:place-content-start'>
          <a href='/' className='p-3 bg-amber-600 rounded-sm float-right'>
            <span className='m-2'>
              <FontAwesomeIcon icon={faEnvelope} size={'xl'} ></FontAwesomeIcon>
            </span>
            Email Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Interested
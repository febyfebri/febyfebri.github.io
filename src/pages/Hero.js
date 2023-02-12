import React from 'react';
import photo from '../assets/Aku.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Hero() {
  return (
    <div className="hero min-h-screen rounded-xl bg-base-300 mt-5">
      <div className="max-2xl:hero-content text-center max-sm:text-left">
        <div className="items-center max-w-2xl">
          <img src={photo}  alt='logo' className='w-60 h-60 m-auto'/>
            <h1 className="text-xl text-secondary max-2xl:text-lg font-bold max-sm:text-md pl-2">Hi, I'm Feby Febri Yansyah</h1>
            <h1 className="text-3xl max-2xl:text-2xl font-bold max-sm:text-xl pl-2">UI/UX Designer and Mobile<br></br>Developer.</h1>
          <p className="max-2xl:py-6 text-base text-gray-300 min-sm:py-6 p-2">I’m from Indonesia and I have been working as a UI UX designer for more than 2 years. I’ve worked for a NTC ( Network Tecnology Consultan ) as a Mobile designer and Mobile Developer for 1 years and currently I Freelancer In Upwork and right now I am looking forward to collaborate with you!</p>
          <ul className='flex space-x-5 px-1 mt-2 mb-2 justify-center max-sm:justify-start pl-2'>
            <li><a href={'https://www.facebook.com/suiikakak'} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={brands('facebook')} size={'xl'} /></a></li>
            <li><a href={'https://github.com/febyfebri'} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={brands('github')} size={'xl'} /></a></li>
            <li><a href={'https://dribbble.com/febyFebri'} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={brands('dribbble')} size={'xl'} /></a></li>
            <li><a href={'https://linkedin.com/in/feby-febri-86b05b199'} target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={brands('linkedin')} size={'xl'} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
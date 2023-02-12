import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import Lottie from 'react-lottie'
import logo from '../assets/F.json'

function Footer() {

    const logoAnimation = {
        loop: true,
        autoplay: true,
        animationData: logo,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }

  return (
    <footer className="footer footer-center p-10 bg-base-300 text-white">
        <div>
            <div className='flex items-center'>
            <div className='h-12 w-12 border-gray-700 rounded-md border-4 rotate-45 relative z-10 mt-4'>
            </div>
                <div className='absolute z-0'>
                <Lottie options={logoAnimation} width={48} height={48}/>
                </div>
            </div>
            <h1 className="font-bold text-2xl mt-2">
                Get In Touch
            </h1> 
            <a href='mailto:febrifeby468@gmail.com'>febrifeby468@gmail.com</a>
        </div> 
        <div>
            <div className="grid grid-flow-col gap-10">
                <a href={'https://www.facebook.com/suiikakak'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('facebook')} size={'2x'}></FontAwesomeIcon></a>
                <a href={'https://github.com/febyfebri'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('dribbble')} size={'2x'}></FontAwesomeIcon></a>
                <a href={'https://dribbble.com/febyFebri'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('linkedin')} size={'2x'}></FontAwesomeIcon></a>
                <a href={'https://linkedin.com/in/feby-febri-86b05b199'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('github')} size={'2x'}></FontAwesomeIcon></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
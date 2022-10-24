import React from 'react'
import { Navbar } from './Navbar'

export const AboutSection = ({title, subtitle, text, titleColor, subColor}) => {
  return (
  <>  
    <Navbar />
    <div className='h-screen bg-red-500 flex items-center justify-center' id='about'>
        <div className='w-6/12 mx-auto sm:w-10/12'>
            <div className='flex gap-6 sm:flex-col'>
                <div className='text-end max-w-xs sm:text-start'>
                    <h1 className={`text-3xl font-bold mb-2 text-${titleColor}-100`}>{title}</h1>
                    <h2 className={`text-xl font-bold text-${subColor}-100`}>{subtitle}</h2>
                </div>
                <div className='text-start max-w-sm'>
                    <p className={`text-base text-gray-200 font-light leading-loose`}>{text}</p>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

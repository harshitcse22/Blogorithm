import React from 'react'
import { footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row justify-between border-b border-gray-500/30 text-gray-500 py-8'>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <img src="/favicon.svg" alt="logo" className='w-8 h-8'/>
            <span className='text-xl font-bold'>Blogorithm</span>
          </div>
          <p className='max-w-[410px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi cumque. Quis in cumque excepturi modi sint ipsam dolorem, doloremque odio perspiciatis quasi amet, pariatur at ea deserunt, fugit neque recusandae cupiditate.</p>
        </div>

        <div className='flex flex-wrap justify-between md:w-1/2 gap-5 mt-6 md:mt-0'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright 2025 @ Blogorithm - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer

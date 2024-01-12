import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
            <h1 className='text-xl font-bold text-gray-700'>TOURISM</h1>
            
        </div>
        <p className='flex justify-center mt-4'>by Arjun Atpadkar</p>
    </div>
  )
}

export default Footer

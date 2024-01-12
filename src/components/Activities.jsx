import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto md:flex  mt-[-75px]'>
      <div className='relative p-4 md:w-1/2 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src='https://cdn.pixabay.com/photo/2021/12/05/11/22/vinpearl-land-6847412_1280.jpg' alt='' />
      </div>
      
      <div className='relative p-4 md:w-1/2'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Cruises</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src='https://cdn.pixabay.com/photo/2013/06/08/04/17/ferry-boat-123059_640.jpg' alt='' />
      </div>

      <div className='relative p-4 md:w-1/2'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Excursions</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src='https://images.pexels.com/photos/3098970/pexels-photo-3098970.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </div>

    </div>
  )
}

export default Activities

import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img 
            className=' w-full h-full object-cover' 
            src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_1280.jpg' alt='' />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-xl'>Explore, Dream, Discover: Your Journey Begins Here!</h1>
                <h2 className=' text-4xl py-4 italic'>With Tourism</h2>
                <p>Embark on a voyage of discovery with our immersive travel experiences. Unleash your wanderlust, create memories, and let our website be your compass to extraordinary destinations</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero

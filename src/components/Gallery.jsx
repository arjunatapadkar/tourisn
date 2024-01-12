import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>

        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>

        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_640.jpg' alt='' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://cdn.pixabay.com/photo/2014/11/15/23/29/fairytale-532850_640.jpg' alt='' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://cdn.pixabay.com/photo/2014/05/08/15/37/coast-340348_640.jpg' alt='' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_640.jpg' alt='' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://cdn.pixabay.com/photo/2021/08/06/18/51/lake-6526995_640.jpg' alt='' />
            </div>
        </div>

    </div>
  )
}

export default Gallery;

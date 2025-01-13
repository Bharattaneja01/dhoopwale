import React from 'react'

const DhoopCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://5.imimg.com/data5/SELLER/Default/2024/8/443611750/WR/PQ/UP/215035880/dhoop-batti-fragrance.jpg" alt='' />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Zed Black</h3>
            <p className='mt-2 text-sm text-gray-500 '>Wet Incense Fragrance Dhoop</p>
        </div>
    </div>
  )
}

export default DhoopCard
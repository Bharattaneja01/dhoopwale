import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import DhoopCarousel from '../../components/DhoopCarousel/DhoopCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='px-5 lg:px-10 space-y-10 py-20 flex flex-col justify-center'>
            <DhoopCarousel /> 
            <DhoopCarousel /> 
            <DhoopCarousel /> 
            <DhoopCarousel /> 
        </div>
    </div>
  )
}

export default HomePage
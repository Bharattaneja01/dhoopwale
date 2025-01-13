import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import DhoopCarousel from '../../components/DhoopCarousel/DhoopCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div>
            <DhoopCarousel /> 
        </div>
    </div>
  )
}

export default HomePage
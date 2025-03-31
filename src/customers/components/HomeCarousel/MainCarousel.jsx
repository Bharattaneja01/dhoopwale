import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} />)
    return (
        <div className='flex h-[40rem] w-[30rem] items-center cursor-pointer overflow-hidden px-6 ml-40'>

            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    )
}

export default MainCarousel; 
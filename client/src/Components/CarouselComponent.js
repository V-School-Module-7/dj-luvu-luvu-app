import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import imageOne from '../Images/Insta1.jpg'
import imageTwo from '../Images/Insta6.jpg'

function CarouselComponent() {
    return (
        <Carousel showThumbs={false}>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageOne} alt="One"/>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageTwo} alt="Two"/>
            </div>
        </Carousel>
    )
}

export default CarouselComponent
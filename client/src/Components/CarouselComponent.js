import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import videoOne from '../Images/Corporate/IMG_1978.MOV'
import imageOne from '../Images/Corporate/IMG_0306b.jpg'
import imageTwo from '../Images/Corporate/IMG_3722.JPG'
import imageThree from '../Images/Corporate/IMG_4526.JPG'
import imageFour from '../Images/Corporate/IMG_6227.JPG'
import imageFive from '../Images/Corporate/IMG_6259b.jpg'

function CarouselComponent() {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} swipeable={true} useKeyboardArrows={true} >
            <div className='carouselImageDiv'>
                <video className='carouselImage' src={videoOne} controls autoPlay></video>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageOne} alt="One"/>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageTwo} alt="One"/>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageThree} alt="One"/>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageFour} alt="One"/>
            </div>
            <div className='carouselImageDiv'>
                <img className='carouselImage' src={imageFive} alt="Two"/>
            </div>
        </Carousel>
    )
}

export default CarouselComponent
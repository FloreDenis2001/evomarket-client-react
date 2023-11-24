import React from 'react'
import MainCarousel from '../components/MainCarousel'
import Advertisement from '../components/Advertisement'
import HomeSectionCarousel from '../components/Product/CarouselProducts'

const Home = () => {
  return (
    <main>
      <MainCarousel />
      <div className='carousel__category'>
        <p className='carousel__title'> Just for you </p>
        <HomeSectionCarousel />
      </div>
      <div className='carousel__category'>
        <p className='carousel__title'>Pick of the day</p>
        <HomeSectionCarousel />
      </div>
      <div className='carousel__category'>
        <p className='carousel__title'>Best Deals </p>
        <HomeSectionCarousel />
      </div>

      <Advertisement />

      
      <div className='carousel__category'>
        <p className='carousel__title'>Hot Promotions</p>
        <HomeSectionCarousel />
      </div>
      <div className='carousel__category'>
        <p className='carousel__title'>Just Arrived</p>
        <HomeSectionCarousel />
      </div>

    </main>


  )
}

export default Home
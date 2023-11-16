import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import Advertisement from '../components/ui/Advertisement'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'

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
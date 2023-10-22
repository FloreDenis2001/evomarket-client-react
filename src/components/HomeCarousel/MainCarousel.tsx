import React from 'react';
import { mainCarouselData } from './MainCaoruselData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const MainCarousel = () => {



  return (
    <div className="carousel-container">
      <Carousel autoPlay={true} interval={3000} showThumbs={false} showStatus={false}>
        {mainCarouselData.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;

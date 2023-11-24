import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { mainCarouselData } from '../MainCaoruselData';


const ProductCarouseImages = () => {
  const mainCarouselImages = mainCarouselData.map(item => item.image);

  return (
    <div className='product__carouselImages'>
      <Carousel interval={null}>
        {mainCarouselImages.map((image, index) => (
          <Carousel.Item  key={index}>
            <img
              className="product__image "
              src={image}
              alt={`Image ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCarouseImages;

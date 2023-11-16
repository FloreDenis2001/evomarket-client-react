import React from 'react'
import ProductCarouseImages from '../components/ProductCarouselImage/ProductCarouseImages'
import ProductPageContent from '../components/ProductPage/ProductPageContent'
import HomeSectionCarousel from '../components/CarouselProducts/CarouselProducts'

const ProductPage = () => {
  return (
    <div className='productPage'>
    <div className="product">
    <div className='product__containerPage'>
        <ProductCarouseImages/>
        <ProductPageContent/>
    </div>
   
    </div>

<div className='carousel__category'>
<p className='carousel__title'>Similar Products</p>
<HomeSectionCarousel />
</div>
<div className='carousel__category'>
<p className='carousel__title'>Recent View</p>
<HomeSectionCarousel />
</div>
</div>
  )
}

export default ProductPage;
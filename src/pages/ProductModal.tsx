import React from 'react'
import ProductContaienrModal from '../components/ProductConatinerModal/ProductContainerModal'
import ProductContainerModal from '../components/ProductConatinerModal/ProductContainerModal'
import ProductCarouseImages from '../components/ProductCarouselImage/ProductCarouseImages'

const ProductModal = () => {
  return (
    
    <div className="product">
    <div className='product__modal'>
        <ProductCarouseImages/>
        <ProductContainerModal/>
    </div>
    </div>
  )
}

export default ProductModal
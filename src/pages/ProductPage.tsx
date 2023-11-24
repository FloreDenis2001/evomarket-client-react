import React, { useEffect, useState } from 'react'
import ProductCarouseImages from '../components/Product/ProductCarouseImages'
import ProductPageContent from '../components/Product/ProductPageContent'
import HomeSectionCarousel from '../components/Product/CarouselProducts'
import { useParams } from 'react-router'
import ServiceProduct from '../services/ServiceProduct'
import Product from '../models/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, selectRetrieveProductState } from '../store/product/products.selectors'

const ProductPage = () => {

  const { productSKU } = useParams();
  const [product, setProduct] = useState<Product>();
  const serviceProduct = new ServiceProduct();


  const getProduct = async (): Promise<void> => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const productData = await serviceProduct.getProductBySKU(String(productSKU));
    setProduct(productData);
  };

  useEffect(() => {
      getProduct();
  }, [productSKU]);



  return (
    <div className='productPage'>
      <div className="product">
        <div className='product__containerPage'>
          <ProductCarouseImages />

          {product && (
            <ProductPageContent product={product} />
          )}

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
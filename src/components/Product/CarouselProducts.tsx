import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceProduct from '../../services/ServiceProduct';
import { ProductCart } from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectRetrieveProductState } from '../../store/product/products.selectors';
import { LoadingState } from '../../ActionTypes/LoadingState';
import { retriveProductsError, retriveProductsLoading, retriveProductsSucces, loadProducts } from '../../store/product/products.reducers';
import { Link } from 'react-router-dom';

const HomeSectionCarousel: React.FC = () => {
    const products = useSelector(selectProducts);
    const retriveState = useSelector(selectRetrieveProductState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (retriveState === LoadingState.NONE) {
            retriveProducts();
        }
    }, []);

    const serviceProduct = new ServiceProduct();

    const retriveProducts = async (): Promise<void> => {
        dispatch(retriveProductsLoading());
        try {
            const productsData = await serviceProduct.getAllProducts();
            dispatch(retriveProductsSucces());
            dispatch(loadProducts(productsData));
        } catch (error) {
            dispatch(retriveProductsError());
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 4, infinite: true, dots: true } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
            { breakpoint: 380, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <div className='carousel__cards'>
            {retriveState === LoadingState.SUCCES && (
                <Slider {...settings}>
                    {products.map((product) => (
                            <ProductCart product={product} />
                    ))}
                </Slider>
            )}

            {retriveState === LoadingState.NONE && <p>Loading products...</p>}
        </div>
    );
};

export default HomeSectionCarousel;

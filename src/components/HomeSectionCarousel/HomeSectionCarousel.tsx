import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from '../../models/Product/Product';
import ServiceProduct from '../../services/ServiceProduct';
import { useSpring, animated } from 'react-spring';
import { ProductCart } from '../ui/ProductCard';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectRetrieveProductState } from '../../store/product/products.selectors';
import { LoadingState } from '../../ActionTypes/LoadingState';
import { retriveProductsError, retriveProductsLoading, retriveProductsSucces,loadProducts } from '../../store/product/products.reducers';

const HomeSectionCarousel: React.FC = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // let [products, setProducts] = useState<Product[]>([]);

    let products = useSelector(selectProducts);
    let retriveState = useSelector(selectRetrieveProductState);
    const dispatch = useDispatch();


    useEffect(() => {
        if (retriveState == LoadingState.NONE) {
            retriveProducts();
        }

        // loadProducts();

    }, []);


    let serviceProduct = new ServiceProduct();

    let loadProducts = async (): Promise<void> => {

        const serviceProduct = new ServiceProduct();
        try {
            const productsData = await serviceProduct.getAllProducts();
            console.log("Products data:", productsData);
            // setProducts(productsData);
            ;
        } catch (error) {
            console.error('Error fetching products:', error);
        }

    }


    let retriveProducts = async (): Promise<void> => {
        console.log("denis");
        dispatch(retriveProductsLoading());
        try {
            console.log("denis");
            let products = await serviceProduct.getAllProducts();
            dispatch(retriveProductsSucces());
            dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: products });
        } catch (error) {
            dispatch(retriveProductsError());
        }
    }

    // useEffect(() => {
    //     console.log("Componenta a fost actualizată cu noile date pentru products:", products);
    // }, [products]);


    return (
        
            <div className='carousel__cards'>
                {products.length > 0 ? (
                    <Slider {...settings}>
                        {products.map((produs) => (
                            <ProductCart key={String(produs.SKU)} product={produs} />
                        ))}
                    </Slider>
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
    );


};

export default HomeSectionCarousel;



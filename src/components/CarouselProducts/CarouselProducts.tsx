import React, { Component, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceProduct from '../../services/ServiceProduct';
import { ProductCart } from '../ui/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectRetrieveProductState } from '../../store/product/products.selectors';
import { LoadingState } from '../../ActionTypes/LoadingState';
import { retriveProductsError, retriveProductsLoading, retriveProductsSucces,loadProducts} from '../../store/product/products.reducers';

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


    let products = useSelector(selectProducts);
    let retriveState = useSelector(selectRetrieveProductState);
    const dispatch = useDispatch();


    useEffect(() => {
        if (retriveState == LoadingState.NONE) {
            retriveProducts();
        }

 

    }, []);


    let serviceProduct = new ServiceProduct();




    let retriveProducts = async (): Promise<void> => {
        dispatch(retriveProductsLoading());
        try {
            console.log("denis");
            let productsData = await serviceProduct.getAllProducts();
            dispatch(retriveProductsSucces());
            console.log(productsData);
            dispatch(loadProducts(productsData));
        } catch (error) {
            dispatch(retriveProductsError());
        }
    }

  

  


    return (

        <div className='carousel__cards'>
            {retriveState == LoadingState.SUCCES && (
                <Slider {...settings}>
                    {products.map((produs) => (
                        <ProductCart key={String(produs.SKU)} product={produs}  />
                    ))}
                </Slider>
            )}

            {

                retriveState == LoadingState.NONE && (
                    <p>Loading products...</p>
                )
            }
        </div>
    );


};

export default HomeSectionCarousel;



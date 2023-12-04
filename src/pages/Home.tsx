import React from "react";
import MainCarousel from "../components/MainCarousel";
import Advertisement from "../components/Advertisement";
import HomeSectionCarousel from "../components/Product/CarouselProducts";

const Home = () => {
  return (
    <main>
      <MainCarousel />
      <div className="carousel__category">
        <p className="carousel__title"> The Best Offers </p>
        <HomeSectionCarousel />
      </div>
      <div className="carousel__category">
        <p className="carousel__title">New Goods</p>
        <HomeSectionCarousel />
      </div>
      <Advertisement />
      <div className="carousel__category">
        <p className="carousel__title">Hot Promotions</p>
        <HomeSectionCarousel />
      </div>
      <div className="carousel__category">
        <p className="carousel__title">Just Arrived</p>
        <HomeSectionCarousel />
      </div>
    </main>
  );
};

export default Home;

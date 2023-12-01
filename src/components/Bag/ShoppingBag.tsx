import React from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import { ProductCart } from "../Product/ProductCard";
import BagItem from "./BagItem";
import CartTotals from "./CartTotals";
import HomeSectionCarousel from "../Product/CarouselProducts";

const ShoppingBag: React.FC = () => {
  const bag = useSelector(selectBag);
  let total = bag.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  }, 0);

  return (
    <main>
      {bag.length >= 0 && (
        <>
          <div className="bag__main">
            <div className="bag__cart">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bag.map((product) => (
                    <BagItem key={product.product.sku} productBag={product} />
                  ))}
                </tbody>
              </table>
            </div>

            <CartTotals />
          </div>
          <div className="carousel__category">
            <p className="carousel__title">Same Products</p>
            <HomeSectionCarousel />
          </div>
        </>
      )}

      {bag.length <= 0 && <p>No products selected ...</p>}
    </main>
  );
};

export default ShoppingBag;

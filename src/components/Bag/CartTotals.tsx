// CartTotals.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import ShippingOptions from "./ShippingOptions";
import { useNavigate } from "react-router-dom";

const CartTotals: React.FC = () => {
  const bag = useSelector(selectBag);
  const [selectedShippingOption, setSelectedShippingOption] =
    useState<string>("Flat rate");
  let nav = useNavigate();
  let total = bag.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  }, 0);

  const handleFlatShipping = () => {
    total += 10;
  };

  const handleShippingOptionChange = (option: string) => {
    setSelectedShippingOption(option);
  };

  const calculateFinalTotal = () => {
    if (selectedShippingOption === "Flat rate") {
      total += 10;
    }
    return total;
  };

  function oToCheckout() {
    nav("/checkout");
  }

  return (
    <div className="bag__cart__total">
      <h2>Cart Totals</h2>
      <div className="bag__cart__total__header">
        <p className="bag__cart__total__header__item">Product</p>
        <p className="bag__cart__total__header__item">Subtotal</p>
      </div>
      <div className="bag__cart__total__details">
        <div className="bag__cart__total__details__item">
          <p>Subtotal : </p>
          <p className=" bag__cart__total__details__item__price">${total}</p>
        </div>
        <div className="bag__cart__total__details__item">
          <p>Shipping : </p>
          <ShippingOptions
            selectedOption={selectedShippingOption}
            handleFlat={() => handleFlatShipping()}
            onShippingOptionChange={handleShippingOptionChange}
          />
        </div>

        <div className="bag__cart__total__details__item">
          <p>Total : </p>
          <p className=" bag__cart__total__details__item__price">${calculateFinalTotal()}</p>
        </div>
      </div>
      <button className="button__first" onClick={() => oToCheckout()}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotals;

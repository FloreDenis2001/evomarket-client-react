import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import ShippingOptions from "../Bag/ShippingOptions";
import CheckoutCardItem from "./CheckoutCardItem";

const CardTotalCheckout = () => {
  const bag = useSelector(selectBag);
  const [selectedShippingOption, setSelectedShippingOption] =
    useState<string>("Flat rate");
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

  return (
    <div className="checkout_cart__total">
      <table>
        <thead>
          <tr>
            <th className="checkout__cart__hname">Product</th>
            <th className="checkout__cart__htotal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="checkout__cart__container">
            {bag.map((product) => (
              <CheckoutCardItem key={product.product.sku} productBag={product} />
            ))}
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th>Subtotal </th>
            <td>${total}</td>
          </tr>
          <tr>
            <th>Shipping </th>
            <ShippingOptions
              selectedOption={selectedShippingOption}
              handleFlat={() => handleFlatShipping()}
              onShippingOptionChange={handleShippingOptionChange}
            />
          </tr>

          <tr>
            <th>Total </th>
            <td>${calculateFinalTotal()}</td>
          </tr>
        </tfoot>
      </table>

      <button className="checkout__footer__button__checkout">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CardTotalCheckout;

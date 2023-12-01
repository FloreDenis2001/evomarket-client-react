// CartTotals.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import ShippingOptions from "./ShippingOptions";

const CartTotals: React.FC = () => {
  const bag = useSelector(selectBag);
  const [selectedShippingOption, setSelectedShippingOption] = useState<string>("Flat rate");

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
    <div className="bag__cart__total">
      <h2>Cart Totals</h2>

      <table>
        <tbody>
          <tr>
            <th>Subtotal : </th>
            <td>${total}</td>
          </tr>
          <tr>
            <th>Shipping : </th>
            <ShippingOptions
              selectedOption={selectedShippingOption}
              handleFlat={() => handleFlatShipping()}
              onShippingOptionChange={handleShippingOptionChange}
            />
          </tr>

          <tr>
            <th>Total : </th>
            <td>${calculateFinalTotal()}</td>
          </tr>
        </tbody>
      </table>

      <button className="bag__footer__button__checkout">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotals;

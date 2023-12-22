import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import ShippingOptions from "../Bag/ShippingOptions";
import CheckoutCardItem from "./CheckoutCardItem";
import CreateOrderRequest from "../../models/Order/CreateOrderRequest";
import LoginContextType from "../../models/User/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import { BillingDetailsContext } from "../../context/BillingDetailsProvider";
import AddressContextType from "../../models/Address/AddressContextType";
import ServiceOrder from "../../services/ServiceOrder";

const CardTotalCheckout = () => {
  const bag = useSelector(selectBag);
  let serviceOrder=new ServiceOrder();
  const [selectedShippingOption, setSelectedShippingOption] =
    useState<string>("Flat rate");

    let { user, setUserCookie } = useContext(LoginContext) as LoginContextType;
    let { billingAddress,shippingAddress } = useContext(BillingDetailsContext) as AddressContextType;

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


  const orderRequest: CreateOrderRequest = {
    products: bag,
    userId: user.id,
    shippingAddress: shippingAddress,
    orderAddress: billingAddress,
  };

  const handlerPlaceOrder=async () => {
    console.log(orderRequest);
    try {
      let order = await serviceOrder.createOrder(orderRequest);
      console.log(order);
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="checkout__cart__total">
      <div className="checkout__cart__total__container">
        <div className="checkout__cart__total__container__header">
          <p className="checkout__cart__total__container__header__item">
            Product
          </p>
          <p className="checkout__cart__total__container__header__item">
            Subtotal
          </p>
        </div>

        <div className="checkout__cart__total__container__products">
          {bag.map((product) => (
            <CheckoutCardItem key={product.product.sku} product={product} />
          ))}
        </div>

        <div className="checkout__cart__total__container__details">
          <div className="checkout__cart__total__container__details__item">
            <p>Subtotal : </p>
            <p>${total}</p>
          </div>
          <div className="checkout__cart__total__container__details__item">
            <p>Shipping : </p>
            <ShippingOptions
              selectedOption={selectedShippingOption}
              handleFlat={() => handleFlatShipping()}
              onShippingOptionChange={handleShippingOptionChange}
            />
          </div>
          <div className="checkout__cart__total__container__details__item">
            <p>Total : </p>
            <p>${calculateFinalTotal()}</p>
          </div>
        </div>
      </div>

      <button className="checkout__footer__button__checkout button__first" onClick={()=>handlerPlaceOrder()}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default CardTotalCheckout;

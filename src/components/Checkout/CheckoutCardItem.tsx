import React from "react";
import ProductBag from "../../models/Product/ProductBag";

interface CheckoutCardItemProps {
  productBag: ProductBag;
}

const CheckoutCardItem: React.FC<CheckoutCardItemProps> = ({ productBag }) => {
  return (
    <td className="checkout__cart__item">
      <div className="checkout__cart__item__image">
        <img src="https://i.imgur.com/qFoHc8W.png" />
      </div>

      <div className="checkout__cart__item__container">
        <div className="checkout__cart__item__container__title">
          <h3>{productBag.product.name}</h3>
          <p>Quantity : {productBag.quantity}</p>
        </div>
        <div className="checkout__cart__item__container__total">
          <h3>{productBag.product.price * productBag.quantity}</h3>
        </div>
      </div>
    </td>
  );
};

export default CheckoutCardItem;

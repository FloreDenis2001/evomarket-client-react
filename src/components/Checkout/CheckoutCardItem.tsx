import React, { useEffect, useState } from "react";
import ProductBag from "../../models/Product/ProductBag";
import { useDispatch } from "react-redux";
import {
  removeProductOnBag,
  removeProductOnBagError,
  removeProductOnBagLoading,
  removeProductOnBagSucces,
  updateProductOnBag,
  updateProductOnBagError,
  updateProductOnBagLoading,
  updateProductOnBagSucces,
} from "../../store/bag/bag.reducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface CheckoutCardItemProps {
  product: ProductBag;
}

const CheckoutCardItem: React.FC<CheckoutCardItemProps> = ({ product }) => {
  const [productBag, setProductBag] = useState<ProductBag>({
    product: product.product,
    quantity: product.quantity,
  } as ProductBag);

  const dispatch = useDispatch();

  const handleRemoveShoppingBag = async (): Promise<void> => {
    dispatch(removeProductOnBagLoading());
    try {
      dispatch(removeProductOnBag(product));
      dispatch(removeProductOnBagSucces());
    } catch (error) {
      dispatch(removeProductOnBagError());
    }
  };
  const handleUpdateShoppingBag = async (): Promise<void> => {
    dispatch(updateProductOnBagLoading());
    try {
      dispatch(updateProductOnBag(productBag));
      dispatch(updateProductOnBagSucces());
    } catch (error) {
      dispatch(updateProductOnBagError());
    }
  };

  const handleAddQuantity = () => {
    setProductBag({ ...productBag, quantity: product.quantity + 1 });
  };
  const handleMinusQuantity = () => {
    if (product.quantity < 2) {
      handleRemoveShoppingBag();
    } else {
      setProductBag({ ...productBag, quantity: product.quantity - 1 });
    }
  };

  useEffect(() => {
    handleUpdateShoppingBag();
  }, [productBag]);

  return (
    <>
    {product.quantity > 0 && (
      <div className="checkout__containerItem">
        <div className="checkout__containerItem__image">
          <img
            src="https://i.imgur.com/qFoHc8W.png"
            alt={product.product.name}
          />
        </div>
        <div className="checkout__containerItem__info">
          <h2 className="checkout__containerItem__info__title">
            {product.product.name}
          </h2>
          <div className="checkout__quantity">
            <input
              type="button"
              value="-"
              className="checkout__quantity__button"
              onClick={handleMinusQuantity}
            />
            <label>{product.quantity}</label>
            <input
              type="button"
              value="+"
              className="checkout__quantity__button"
              onClick={handleAddQuantity}
            />
          </div>

          <div className="checkout__containerItem__info__qp">
            <span className="checkout__containerItem__info__quantity">
              {product.quantity} x
            </span>
            <span className="checkout__containerItem__info__price">
                ${product.product.price}
            </span>
          </div>
          <FontAwesomeIcon
            className="checkout__containerItem__info__remove"
            icon={faXmark}
            onClick={() => handleRemoveShoppingBag()}
          />
        </div>
      </div>
    )}
  </>
  );
};

export default CheckoutCardItem;

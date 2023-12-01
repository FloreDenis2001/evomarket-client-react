import React, { useEffect, useState } from "react";
import Product from "../../models/Product/Product";
import { useDispatch } from "react-redux";
import { removeProductLoading } from "../../store/product/products.reducers";
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
import ProductBag from "../../models/Product/ProductBag";

interface ListShoppingProps {
  product: ProductBag;
}

const ListItem: React.FC<ListShoppingProps> = ({ product }) => {
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
        <div className="bag__containerItem">
          <div className="bag__containerItem__image">
            <img
              src="https://i.imgur.com/qFoHc8W.png"
              alt={product.product.name}
            />
          </div>
          <div className="bag__containerItem__info">
            <h2 className="bag__containerItem__info__title">
              {product.product.name}
            </h2>
            <div className="bag__quantity">
              <input
                type="button"
                value="-"
                className="bag__quantity__button"
                onClick={handleMinusQuantity}
              />
              <label>{product.quantity}</label>
              <input
                type="button"
                value="+"
                className="bag__quantity__button"
                onClick={handleAddQuantity}
              />
            </div>

            <div className="bag__containerItem__info__qp">
              <span className="bag__containerItem__info__quantity">
                {product.quantity} x
              </span>
              <span className="bag__containerItem__info__price">
                ${product.product.price}
              </span>
            </div>
            <FontAwesomeIcon
              className="bag__containerItem__info__remove"
              icon={faXmark}
              onClick={() => handleRemoveShoppingBag()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ListItem;

import React, { useEffect, useState } from "react";
import Product from "../../models/Product/Product";
import ProductBag from "../../models/Product/ProductBag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeProductOnBag, removeProductOnBagError, removeProductOnBagLoading, removeProductOnBagSucces, updateProductOnBag, updateProductOnBagError, updateProductOnBagLoading, updateProductOnBagSucces } from "../../store/bag/bag.reducers";

interface BagProps {
  productBag: ProductBag;
}

const BagItem: React.FC<BagProps> = ({ productBag }) => {

  const [product, setProductBag] = useState<ProductBag>({
    product: productBag.product,
    quantity: productBag.quantity,
  } as ProductBag);

  const dispatch = useDispatch();

  const handleRemoveShoppingBag = async (): Promise<void> => {
    dispatch(removeProductOnBagLoading());
    try {
      dispatch(removeProductOnBag(productBag));
      dispatch(removeProductOnBagSucces());
    } catch (error) {
      dispatch(removeProductOnBagError());
    }
  };
  const handleUpdateShoppingBag = async (): Promise<void> => {
    dispatch(updateProductOnBagLoading());
    try {
      dispatch(updateProductOnBag(product));
      dispatch(updateProductOnBagSucces());
    } catch (error) {
      dispatch(updateProductOnBagError());
    }
  };

  const handleAddQuantity = () => {
    setProductBag({ ...product, quantity: product.quantity + 1 });
  };
  const handleMinusQuantity = () => {
    if (product.quantity < 2) {
      handleRemoveShoppingBag();
    } else {
      setProductBag({ ...product, quantity: product.quantity - 1 });
    }
  };

  useEffect(() => {
    handleUpdateShoppingBag();
  }, [product]);

  
  return (
    <tr>
      <td>
        <div className="bag__item__info">
        <img src="https://i.imgur.com/qFoHc8W.png" alt="" />
        {productBag.product.name}
        </div>
      </td>
      <td>

      <div className="bag__item__quantity">
              <input
                type="button"
                value="-"
                className="bag__quantity__button"
                onClick={handleMinusQuantity}
              />
              <label>{productBag.quantity}</label>
              <input
                type="button"
                value="+"
                className="bag__quantity__button"
                onClick={handleAddQuantity}
              />
            </div>
      </td>
      <td>${productBag.product.price}</td>
      <td>${productBag.product.price * productBag.quantity}</td>
      <td>
        <button className="bag__item__remove" onClick={handleRemoveShoppingBag}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </td>
    </tr>
  );
};

export default BagItem;

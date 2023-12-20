import React from "react";
import { useSelector } from "react-redux";
import { selectBag } from "../../store/bag/bag.selectors";
import { ProductCart } from "../Product/ProductCard";
import ListItem from "./ListItem";
import { faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
interface ListProps {
  onClose: () => void;
}
const ShoppingList: React.FC<ListProps> = ({onClose}) => {
  const bag = useSelector(selectBag);
  let nav = useNavigate();

  const total = bag.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  },0);

  function handleGoToViewCart(){
    nav("/shopping-cart");
    onClose();
  }

  function goToCheckout(){
    nav("/checkout");
    onClose();
  }

  return (
    <>
      {bag.length >= 0 && (
        <div className="modal-overlay">
          <div className="bag__list">
            <div className="bag__list__nav">
              <p>Shopping cart</p>
              <FontAwesomeIcon icon={faXmark} className="bag__list__nav__close"   onClick={onClose}/>
            </div>

            <div className="bag__container">
              {bag.map((product) => (
                <ListItem key={product.product.sku} product={product} />
              ))}
            </div>

            <div className="bag__footer">
              <div className="bag__footer__total">
                <p>Total : </p>
                <p className="bag__footer__total__price">$ {total}</p>
              </div>
              <div className="bag__footer__button">
                <button className="button__textFirst" onClick={()=>handleGoToViewCart()}>View Cart</button>
                <button className="button__second" onClick={()=>goToCheckout()}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {bag.length <= 0 && <p>No products selected ...</p>}
    </>
  );
};

export default ShoppingList;

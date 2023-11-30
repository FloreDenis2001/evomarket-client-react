import React from "react";
import { useSelector } from "react-redux";
import {
  selectBag,
} from "../../store/bag/bag.selectors";
import { ProductCart } from "../Product/ProductCard";
import BagItem from "./BagItem";

const ShoppingBag: React.FC = () => {
  const bag = useSelector(selectBag);
  let total = bag.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  },0)


  return (
    <>
      {bag.length >= 0 && (
        <table className="bag__table">
          <thead className="bag__table__head">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="bag__table__body">
            {bag.map((product) => (
              <BagItem key={product.product.sku} productBag={product} />
            ))}
          </tbody>
         <tfoot className="bag__table__footer">
            <tr>
              <td colSpan={3}>Total</td>
              <td colSpan={2}>$ {total}</td>
            </tr>
         </tfoot>
        </table>
      )}

      {bag.length <= 0  && <p>No products selected ...</p>}
    </>
  );
};

export default ShoppingBag;

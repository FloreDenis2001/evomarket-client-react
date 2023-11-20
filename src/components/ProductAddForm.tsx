import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectRetrieveProductState,
} from "../store/product/products.selectors";
import Product from "../models/Product/Product";
import ServiceProduct from "../services/ServiceProduct";

const ProductAdd = () => {
  const products = useSelector(selectProducts);
  const retriveState = useSelector(selectRetrieveProductState);
  const dispatch = useDispatch();

  const [addProduct, setAddProduct] = useState<Product>();

  let serviceProduct=new ServiceProduct();

  function handleAddProduct() {
    // dispatch(retriveProductsLoading());
    try {
        // const productsData = await serviceProduct.getAllProducts();
        // dispatch(retriveProductsSucces());
        // dispatch(loadProducts(productsData));
    } catch (error) {
        // dispatch(retriveProductsError());
    }

  }
  return (
    <form>
      <input type="text" placeholder="Name of the product" />
      <textarea placeholder="Description of the product" />
      <input type="text" placeholder="Price" />
      <input type="text" placeholder="Quantitiy" />
      <input type="text" placeholder="Category" />

      <button onClick={handleAddProduct}>Add Product</button>
    </form>
  );
};

export default ProductAdd;

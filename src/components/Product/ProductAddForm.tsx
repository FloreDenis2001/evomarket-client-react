import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddProductState,
  selectProducts,
  selectRetrieveProductState,
} from "../../store/product/products.selectors";
import Product from "../../models/Product/Product";
import ServiceProduct from "../../services/ServiceProduct";
import {
  addProduct,
  addProductError,
  addProductLoading,
  addProductSucces,
} from "../../store/product/products.reducers";
import { LoadingState } from "../../ActionTypes/LoadingState";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";

const ProductAddForm = () => {


  const retriveAddState = useSelector(selectAddProductState);
  const dispatch = useDispatch();
  let nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  const [category, setCategory] = useState("");

  let serviceProduct = new ServiceProduct();

  const [productAdded, setAddProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    category: "",
    weight: 0,
  } as Product);

 

  useEffect(() => {
    let product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category,
      weight: weight,
    } as Product;
    setAddProduct(product);
  }, [name, description, price, quantity, category, weight]);

  const handleAddProduct = async (): Promise<void> => {
    dispatch(addProductLoading);
    try {
      const productsData = await serviceProduct.addProduct(productAdded);
      console.log(productsData);
      dispatch(addProductSucces());
      dispatch(addProduct(productsData));
      setTimeout(() => {
        nav("/");
      }, 2500);
    } catch (error) {
      dispatch(addProductError());
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name of the product"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <textarea
        placeholder="Description of the product"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setPrice(+e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Quantitiy"
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) => {
          setWeight(+e.target.value);
        }}
      />
      {retriveAddState === LoadingState.SUCCES && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This product was added— <strong>check it out!</strong>
        </Alert>
      )}
      {retriveAddState === LoadingState.ERROR && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This product can't be added <strong>check it out!</strong>
        </Alert>
      )}
      <button onClick={() => handleAddProduct()}>Add Product</button>
    </div>
  );
};

export default ProductAddForm;

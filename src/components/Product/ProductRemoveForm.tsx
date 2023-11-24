import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRemoveProductState,
  selectUpdateProductState,
} from "../../store/product/products.selectors";
import Product from "../../models/Product/Product";
import ServiceProduct from "../../services/ServiceProduct";
import {
  removeProduct,
  removeProductError,
  removeProductLoading,
  removeProductSucces,
  updateProduct,
  updateProductError,
  updateProductLoading,
  updateProductSucces,
} from "../../store/product/products.reducers";
import { LoadingState } from "../../ActionTypes/LoadingState";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faSave } from "@fortawesome/free-solid-svg-icons";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ProductRemoveForm = () => {
  const retriveRemoveState = useSelector(selectRemoveProductState);
  const retriveUpdateState = useSelector(selectUpdateProductState);
  const dispatch = useDispatch();

  let serviceProduct = new ServiceProduct();
  let nav = useNavigate();
  const { productSKU } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  const [category, setCategory] = useState("");

  const [productAdded, setProduct] = useState<Product>({
    name: "",
    description: "",
    sku:productSKU,
    price: 0,
    quantity: 0,
    category: "",
    weight: 0,
  } as Product);

  const getProduct = async (): Promise<void> => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const productData = await serviceProduct.getProductBySKU(
      String(productSKU)
    );

    setName(productData.name);
    setDescription(productData.description);
    setPrice(productData.price);
    setQuantity(productData.quantity);
    setCategory(productData.category);
    setWeight(productData.weight);
  };

  useEffect(() => {
    getProduct();
  }, [productSKU]);

  useEffect(() => {
    let product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category,
      weight: weight,
      sku:productSKU
    } as Product;
    console.log(product);
    setProduct(product);
  }, [name, description, price, quantity, category, weight]);

  const handleRemoveProduct = async (): Promise<void> => {
    dispatch(removeProductLoading());
    try {
      const productData = await serviceProduct.removeProduct(
        String(productSKU)
      );

      dispatch(removeProductSucces());
      dispatch(removeProduct(productData));
      setTimeout(() => {
        nav("/");
      }, 2500);
    } catch (error) {
      dispatch(removeProductError());
    }
  };
  const handleEditProduct = async (): Promise<void> => {
    dispatch(updateProductLoading());
    console.log(productAdded);

    try {
      const productData = await serviceProduct.editProduct(productAdded);
      console.log(productData);
      setProduct(productData);
      console.log(productAdded);
      dispatch(updateProductSucces());
      dispatch(updateProduct(productAdded));
      setTimeout(() => {
        nav("/");
      }, 2500);
    } catch (error) {
      dispatch(updateProductError());
    }
  };

  return (
    <div>
      <>
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

        <button className="btn__primary" onClick={() => handleEditProduct()}>
          <FontAwesomeIcon icon={faSave} /> Update
        </button>
        <button className="btn__primary" onClick={() => handleRemoveProduct()}>
          <FontAwesomeIcon icon={faRemove} /> Remove
        </button>

        {retriveRemoveState === LoadingState.ERROR && (
          <Alert severity="error">
            The product dosen't remove ! Something happen !
          </Alert>
        )}
        {retriveRemoveState === LoadingState.SUCCES && (
          <Alert severity="success">The product was removed ! </Alert>
        )}
        {retriveUpdateState === LoadingState.ERROR && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This product dosen't updated -<strong>Something happen!</strong>
          </Alert>
        )}
        {retriveUpdateState === LoadingState.SUCCES && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This product was removed — <strong>check it out!</strong>
          </Alert>
        )}
      </>
    </div>
  );
};

export default ProductRemoveForm;

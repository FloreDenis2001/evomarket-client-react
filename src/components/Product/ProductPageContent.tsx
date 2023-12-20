import { faEdit, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Product from "../../models/Product/Product";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductOnBag,
  addProductOnBagError,
  addProductOnBagLoading,
  addProductOnBagSucces,
  loadBag,
  retriveBagError,
  retriveBagLoading,
} from "../../store/bag/bag.reducers";
import ProductBag from "../../models/Product/ProductBag";

interface ProdcutContainer {
  product: Product;
}

const ProductContainerModal: React.FC<ProdcutContainer> = ({ product }) => {
  const [activeFilter, setActiveFilter] = useState("DESCRIPTION");
  let nav = useNavigate();
  const dispatch = useDispatch();

  const [productBag, setProductBag] = useState<ProductBag>({
    product: product,
    quantity: 1,
  } as ProductBag);

  useEffect(() => {
    setProductBag({ quantity: 1, product: product });
  }, [product]);

  const projectData = [
    {
      title: "DESCRIPTION",
      text: product.description,
    },
    {
      title: "SPECIFICATION",
      text: "SPECIFICATION Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: "BENEFITS",
      text: "BENEFITS Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: "DELIVERY",
      text: "DELIVERY Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: "REVIEWS",
      text: "REVIEWS Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
  ];

  const filteredProjects = projectData.filter(
    (project) => project.title === activeFilter
  );

  const handleAddShoppingBag = async (): Promise<void> => {
    dispatch(addProductOnBagLoading());
    try {
      dispatch(addProductOnBag(productBag));
      dispatch(addProductOnBagSucces());
    } catch (error) {
      dispatch(addProductOnBagError());
    }
  };

  return (
    <div className="product__container">
      <div className="product__container__header">
        <h3 className="product__container__header__title">{product.name} </h3>
        <span className="product__container__header__subtitle">
          {product.category}
        </span>
        <p className="product__container__header__price">${product.price}</p>
      </div>

      <div className="product__container__main">
        <div className="product__container__filter">
          {["DESCRIPTION", "SPECIFICATION", "BENEFITS", "DELIVERY"].map(
            (filter) => (
              <span
                key={filter}
                className={`product__container__item${
                  activeFilter === filter ? "__active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </span>
            )
          )}
        </div>

        <div className="product__container__filterSection">
          {filteredProjects.map((product, index) => (
            <div key={index} className="product__card">
              <p>{product.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="product__container__inputBox">
        <button onClick={() => handleAddShoppingBag()} className="button__second button__pageProduct">
          <FontAwesomeIcon icon={faShoppingBag} /> Add Cart
        </button>

 
      </div>
    </div>
  );
};

export default ProductContainerModal;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "../../models/Product/Product";
import {
  faBagShopping,
  faCircleXmark,
  faHeart,
  faShoppingBag,
  faShoppingCart,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useProduct from "../../hooks/useProduct";
import Rating from "@mui/material/Rating";
interface ProductProps {
  product: Product;
}

export const ProductCart: React.FC<ProductProps> = ({ product }) => {
  const [productValue, actions] = useProduct(product);

  return (
    <div className="card swiper-slide">
      <div className="card__container__image">
        <img
          className="card__img"
          src="https://i.imgur.com/qFoHc8W.png"
          alt=""
        />
      </div>

      <div className="card__container__title">
        <p className="card__title">{product.name} fadas fdad llksa sajjea </p>
      </div>

      <div className="card__container__details">
        {actions.stockLimit() === true && (
          <div className="card__stock">
            <FontAwesomeIcon
              className="card__stock__icon"
              icon={faSquareCheck}
            />
            <p> in stock </p>
          </div>
        )}

        {actions.stockLimit() === false && (
          <div className="card__outstock">
            <FontAwesomeIcon
              className="card__stock__icon"
              icon={faCircleXmark}
            />
            <p> out of stock </p>
          </div>
        )}
        <div className="card__stars">
          {actions.ratingValue() !== 0 && (
            <Rating
              name="size-large"
              size="large"
              defaultValue={actions.ratingValue()}
              readOnly
            />
          )}

          {actions.ratingValue() === 0 && (
            <Rating name="size-large" defaultValue={1} size="large" readOnly />
          )}
        </div>
      </div>

      <div className="card__container__price">
        <p className="card__price">${product.price}</p>
      </div>

      <div className="card__container__buyBox">
        <FontAwesomeIcon
          className="card__container__buyBox__icon"
          icon={faShoppingBag}
        />

        <span className="card__container__buyBox__text">Add To Cart</span>
      </div>

      <div className="card__container__fav">
        <FontAwesomeIcon className="card__fav" icon={faHeart} />
      </div>
    </div>
  );
};

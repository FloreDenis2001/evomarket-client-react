import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Product from "../../models/Product/Product";
import {faCircleXmark, faShoppingCart, faSquareCheck, faStar} from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";
import useProduct from "../../hooks/useProduct";

interface ProductProps {
    product: Product;
}


export const ProductCart: React.FC<ProductProps> = ({product}) => {

    let [stock, setStock] = useState(false);
    const [productValue, actions] = useProduct(product);

    return (
        <div className="card swiper-slide">
            <img className="card__img"
                 src="https://s13emagst.akamaized.net/products/52534/52533125/images/res_2307341a5eea0c5a0a0a08651b509df3.jpg?width=450&height=450&hash=22572E7CBC686F70EEEE61FB614F2B6D"
                 alt=""/>
            <p className="card__title">{product.name}</p>

            <div className="card__details">
                {actions.stockLimit() === true && (
                    <div className="card__stock">

                        <FontAwesomeIcon icon={faSquareCheck}/>
                        <p> in stock </p>


                    </div>
                )}

                {actions.stockLimit() === false && (

                    <div className="card__outstock">

                        <FontAwesomeIcon icon={faCircleXmark}/>
                        <p> out of stock </p>


                    </div>
                )}
                <div className="card__stars">
                    {actions.ratingValue() !== 0 && (
                        Array(actions.ratingValue()).fill(0).map((_, i) => (
                                <FontAwesomeIcon className="card__star" icon={faStar}/>
                            )
                        ))}

                </div>

                <p className="card__price">${product.price}</p>

            </div>


            <button className="card__button--buy">
                <FontAwesomeIcon className="card_shopping" icon={faShoppingCart}/></button>
            <FavoriteBorderIcon className='card__fav' sx={{fontSize: '2.5rem'}}/>
        </div>
    )

}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeart, faShoppingBag, faShoppingCart, faSquareCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HomeSectionCard = () => {
  return (
    <div className="card swiper-slide">
      <img className="card__img" src="https://s13emagst.akamaized.net/products/52534/52533125/images/res_2307341a5eea0c5a0a0a08651b509df3.jpg?width=450&height=450&hash=22572E7CBC686F70EEEE61FB614F2B6D" alt="" />
      <p className="card__title">Apple Iphone 13,512GB, 5G, Purple </p>

      <div className="card__details">
        <div className="card__stock">
          <FontAwesomeIcon icon={faSquareCheck} />
          <p> in stock </p>
        </div>

        <div className="card__stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>

        <p className="card__price">$1500</p>

      </div>


      <button className="card__button--buy">
        <FontAwesomeIcon className="card_shopping" icon={faShoppingCart} />    </button>
        <FavoriteBorderIcon className='card__fav' sx={{ fontSize: '2.5rem' }} />
    </div>
  )
}

export default HomeSectionCard
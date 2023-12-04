import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavDetails = () => {
  return (
    <div className="navigation__details">
      <div className="navigation__details__item">
        <div className="navigation__details__item__iconBox">
          <FontAwesomeIcon  className="navigation__details__item__icon" icon={faPhone} />
          
        </div>

        <div className="navigation__details__item__text">

            <div className="navigation__details__item__title">24 Support</div>
            <div className="navigation__details__item__subtitle">+1 521-215-4211</div>
        </div>
      </div>
      <div className="navigation__details__item">
        <div className="navigation__details__item__iconBox">
        <FontAwesomeIcon className="navigation__details__item__icon" icon={faGlobe} />
        </div>

        <div className="navigation__details__item__text">
            <div className="navigation__details__item__title">Worldwide</div>
            <div className="navigation__details__item__subtitle">Free Shipping</div>
        </div>
      </div>
    </div>
  );
};

export default NavDetails;

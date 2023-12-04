import React, { useState } from "react";
import NavigationItemCard from "./NavigationItemCard";
import {

  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavigationDesktop = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleItemClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="navigation__desktop">
      <ul className="navigation__desktop__list">
        <NavigationItemCard icon={faUser} path={"/myaccount"} />
        <NavigationItemCard icon={faHeart} path={"/favourite"} />

        <div className="navigation__desktop__list__bag">
          <NavigationItemCard icon={faBagShopping} path={"/shoppingBag"} />
        </div>
      </ul>
    </div>
  );
};

export default NavigationDesktop;

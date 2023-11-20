import React from "react";
import {
  faBarsStaggered,
  faCircleUser,
  faHeart,
  faHomeAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationItemCardMobile from "./NavigationItemCardMobile";

const NavigationMobile = () => {
  return (
    <aside className="navigation__mobile">
      <ul className="navigation__mobile__list">
        <NavigationItemCardMobile icon={faHomeAlt} />
        <NavigationItemCardMobile icon={faBarsStaggered} />
        <NavigationItemCardMobile icon={faShoppingBag} />
        <NavigationItemCardMobile icon={faHeart} />
        <NavigationItemCardMobile icon={faCircleUser} />
      </ul>
    </aside>
  );
};

export default NavigationMobile;

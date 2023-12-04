import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingList from "../Bag/ShoppingList";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

interface NavigationItemCardProps {
  icon: string | any;
  path: string;
}

const NavigationItemCard: React.FC<NavigationItemCardProps> = ({
  icon,
  path,
}) => {
  const nav = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleItemClick() {
    if (path === "/shoppingBag") {
      openModal();
    } else {
      nav(path);
    }
  }

  const isWhiteIcon = icon === faBagShopping;

  return (
    <>
      {isModalOpen && <ShoppingList onClose={closeModal} />}

      <li onClick={() => handleItemClick()}>
        <p className="navigation__desktop__link">
          <FontAwesomeIcon
            className={`navigation__desktop__link__icon ${
              isWhiteIcon ? "shop-icon" : ""
            }`}
            icon={icon}
          />
        </p>
      </li>
    </>
  );
};

export default NavigationItemCard;

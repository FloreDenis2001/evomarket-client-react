import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingList from "../Bag/ShoppingList";

interface NavigationItemCardProps {
  title: string;
  icon?: any;
  path: string;
}

const NavigationItemCard: React.FC<NavigationItemCardProps> = ({
  title,
  icon,
  path,
}) => {
  const nav = useNavigate();


  const [isModalOpen, setModalOpen] = useState(false);

  function openModal(){
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

  return (
    <>
    {isModalOpen && <ShoppingList onClose={closeModal} />}

    <li onClick={() => handleItemClick()}>
      <p className="navigation__desktop__link">
        <FontAwesomeIcon
          className="navigation__desktop__link__icon"
          icon={icon}
        />
        <span>{title}</span>
      </p>
    </li>
  </>
  );
};

export default NavigationItemCard;

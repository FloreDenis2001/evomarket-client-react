import {
  faBars,
  faComputerMouse,
  faGamepad,
  faLaptop,
  faMicrochip,
  faMobile,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigationLeftBar } from "./NavigationLeftBarProvider";



const NavigationLeftBar: React.FC = () => {
    const { isOpen, toggleLeftBar } = useNavigationLeftBar();


  return (
    <div
      className={`navigation__leftBar ${
        isOpen ? "" : "navigation__leftBar__close"
      }`}
    >
      <div
        className="navigation__leftBar__iconBox"
        onClick={() => toggleLeftBar()}
      >
        <FontAwesomeIcon
          className="navigation__leftBar__iconBox__icon"
          icon={faBars}
        />
      </div>

      <ul className="navigation__leftBar__options">
        <li className="navigation__leftBar__options__item">
          <a href="#">
            <FontAwesomeIcon
              className="navigation__leftBar__options__item__icon"
              icon={faLaptop}
            />
          </a>
          <span className="navigation__leftBar__options__item__text">
            Laptops,Tablets & PCs
          </span>
        </li>

        <li className="navigation__leftBar__options__item">
          <a href="#">
            <FontAwesomeIcon
              className="navigation__leftBar__options__item__icon"
              icon={faComputerMouse}
            />
          </a>
          <span className="navigation__leftBar__options__item__text">
            Computer & Office
          </span>
        </li>
        <li className="navigation__leftBar__options__item">
          <a href="#">
            <FontAwesomeIcon
              className="navigation__leftBar__options__item__icon"
              icon={faMicrochip}
            />
          </a>
          <span className="navigation__leftBar__options__item__text">
            Hardware & Components
          </span>
        </li>
        <li className="navigation__leftBar__options__item">
          <a href="#">
            <FontAwesomeIcon
              className="navigation__leftBar__options__item__icon"
              icon={faMobileScreenButton}
            />
          </a>
          <span className="navigation__leftBar__options__item__text">
            SmartPhones
          </span>
        </li>
        <li className="navigation__leftBar__options__item">
          <a href="#">
            <FontAwesomeIcon
              className="navigation__leftBar__options__item__icon"
              icon={faGamepad}
            />
          </a>
          <span className="navigation__leftBar__options__item__text">
            Games & Entertainment
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLeftBar;

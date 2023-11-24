import React, { useState } from "react";
import {
  faBarsStaggered,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MeniuBar: React.FC = () => {
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(true);
  };
  const toggleProductsUp = () => {
    setProductsDropdownOpen(false);
  };

  return (
    <div className="menu">
      <aside className="meniuBar">
        <div className="meniuBar__list">
          <li>
            <a
              className="meniuBar__link"
              onMouseEnter={toggleProductsDropdown}
              onClick={toggleProductsDropdown}
            >
              <i className="bx bx-menu-alt-left"></i>
              <FontAwesomeIcon className="search-icon" icon={faBarsStaggered} />
              <p className="meniuBar__link__title">Products</p>
              <FontAwesomeIcon className="search-icon" icon={faCaretDown} />
            </a>
            {isProductsDropdownOpen && (
              <div className="dropdown__main" onMouseLeave={toggleProductsUp}>
                <div className="section">
                  <a href="#" className="dropdown__title">
                    Electronics
                  </a>
                  <div className="dropdown__content">
                    <ul>
                      <li className="dropdown__content__list">
                        <a>Camera & Photo</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Accessories & Supplies</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Headphones</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a>Television & Video</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Video Game Consoles & Accessories</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Portable Audio & Video</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a>GPS & Navigation</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section">
                  <a className="dropdown__title" >
                    Computers
                  </a>
                  <div className="dropdown__content">
                    <ul>
                      <li className="dropdown__content__list">
                        <a >Computer Components</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a>Computer & Tablets</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a>Monitors</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Computer Accessories & Peripherals</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Printers</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Scanners</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section">
                  <a className="dropdown__title" >
                    Gaming
                  </a>
                  <div className="dropdown__content">
                    <ul>
                      <li className="dropdown__content__list">
                        <a >Desktop Gaming</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Monitor Gaming</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >PlayStation</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Xbox</a>
                      </li>
                      <li className="dropdown__content__list">
                        <a >Nintendo Switch</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <a className="meniuBar__link" >
              Today's Deals
            </a>
          </li>
          <li>
            <a className="meniuBar__link" >
              Customer Service
            </a>
          </li>
          <li>
            <a className="meniuBar__link" >
              Gift Cards
            </a>
          </li>
          <li>
            <a className="meniuBar__link">
              Sell
            </a>
          </li>
        </div>
      </aside>
    </div>
  );
};

export default MeniuBar;

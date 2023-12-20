import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyAccount = () => {
  return (
    <div className="account">
      <div className="account__left">
        <ul className="account__left__list">
          <li className="account__left__list__option">
            <FontAwesomeIcon className="account__left__list__option__icon" icon={faDashboard} />
            <p className="account__left__list__option__text"></p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon className="account__left__list__option__icon" icon={faDashboard} />
            <p className="account__left__list__option__text"></p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon className="account__left__list__option__icon" icon={faDashboard} />
            <p className="account__left__list__option__text"></p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon className="account__left__list__option__icon" icon={faDashboard} />
            <p className="account__left__list__option__text"></p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon className="account__left__list__option__icon" icon={faDashboard} />
            <p className="account__left__list__option__text"></p>
          </li>
        </ul>
      </div>

      <div className="account__right"></div>
    </div>
  );
};

export default MyAccount;

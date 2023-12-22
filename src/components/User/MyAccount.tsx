import {
  faCashRegister,
  faCreditCard,
  faDashboard,
  faListCheck,
  faRightFromBracket,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../models/User/LoginContextType";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MyAccount = () => {
  let { user, logOut } = useContext(LoginContext) as LoginContextType;
  const navigate = useNavigate();
  const handleLogOut = async (): Promise<void> => {
    try {
      logOut();
      navigate("/");
    } catch (err) {
      console.log("Error log out : ", err);
    }
  };

  return (
    <div className="account">
      <div className="account__left">
        <h2 className="account__title">Hello , {user.firstName}</h2>
        <ul className="account__left__list">
          <li className="account__left__list__option">
            <FontAwesomeIcon
              className="account__left__list__option__icon"
              icon={faDashboard}
            />
            <p className="account__left__list__option__text">Dashboard</p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon
              className="account__left__list__option__icon"
              icon={faListCheck}
            />
            <p className="account__left__list__option__text">Orders</p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon
              className="account__left__list__option__icon"
              icon={faUserAlt}
            />
            <p className="account__left__list__option__text">Account details</p>
          </li>
          <li className="account__left__list__option">
            <FontAwesomeIcon
              className="account__left__list__option__icon"
              icon={faCreditCard}
            />
            <p className="account__left__list__option__text">Payment methods</p>
          </li>
          <li
            className="account__left__list__option"
            onClick={() => handleLogOut()}
          >
            <FontAwesomeIcon
              className="account__left__list__option__icon"
              icon={faRightFromBracket}
            />
            <p className="account__left__list__option__text">Log out</p>
          </li>
        </ul>
      </div>

      <div className="account__right">
        <div className="account__right__box">
          <FontAwesomeIcon
            className="account__right__box__icon"
            icon={faListCheck}
          />
          <p className="account__right__box__text">Orders</p>
        </div>
        <div className="account__right__box">
          <FontAwesomeIcon
            className="account__right__box__icon"
            icon={faCreditCard}
          />
          <p className="account__right__box__text">Payment</p>
        </div>
        <div className="account__right__box">
          <FontAwesomeIcon
            className="account__right__box__icon"
            icon={faUserAlt}
          />
          <p className="account__right__box__text">Account details</p>
        </div>

        <div className="account__right__box" onClick={() => handleLogOut()}>
          <FontAwesomeIcon
            className="account__right__box__icon"
            icon={faRightFromBracket}
          />
          <p className="account__right__box__text">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

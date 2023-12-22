import React, { useContext, useState } from "react";
import NavigationItemCard from "./NavigationItemCard";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../models/User/LoginContextType";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NavigationDesktop = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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

  const handleItemClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="navigation__desktop">
      <ul className="navigation__desktop__list">
        <div className="navigation__desktop__list__bagWhite">
          <div className="user-dropdown" id="userAccount">
            <NavigationItemCard icon={faUser} path={""} />
            <div className="dropdown-content">
              {user.id != 0 ? (
                <>
                  <p>Hello , {user.firstName}</p>
                  {user.userRole === "ADMIN" && (<a href="/panel">Admin Panel</a>)}
                  <a href="/my-account">My Account</a>
                  <a href="/orders">Orders</a>
                  <a href="/returns">Returns</a>
                  <a href="/" onClick={() => handleLogOut()}>
                    Log out
                  </a>
                </>
              ) : (
                <>
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="navigation__desktop__list__bagWhite">
          <NavigationItemCard icon={faHeart} path={"/favourite"} />
        </div>
        <div className="navigation__desktop__list__bag">
          <NavigationItemCard icon={faBagShopping} path={"/shoppingBag"} />
        </div>
      </ul>
    </div>
  );
};

export default NavigationDesktop;

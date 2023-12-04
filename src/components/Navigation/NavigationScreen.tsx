import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import SearchBox from "../SearchBox";
import Logo from "../Logo";
import NavigationItemCard from "./NavigationItemCard";
import { Link, useNavigate } from "react-router-dom";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavDetails from "./NavDetails";
import NavigationDesktop from "./NavigationDesktop";
import NavigationCateogry from "./NavigationCateogry";
import NavigationOptions from "./NavigationOptions";
import NavigationLeftBar from "./NavigationLeftBar";

const NavigationScreen: React.FC = () => {
  return (
    <header>
      <div className="header__container">
        <Logo />
        <SearchBox />
        <NavDetails />
      </div>

      <div className="header__container">
        <NavigationLeftBar />
        <NavigationCateogry />
        <NavigationOptions />
        <NavigationDesktop />
      </div>
    </header>
  );
};

export default NavigationScreen;

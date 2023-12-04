import { faBars, faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavigationLeftBar from "./NavigationLeftBar";
import { useNavigationLeftBar } from "./NavigationLeftBarProvider";

const NavigationCateogry = () => {

    const { isOpen, toggleLeftBar } = useNavigationLeftBar();


  return (
    <div className="navigation__categories" onClick={toggleLeftBar}>
      <div className="navigation__categories__iconBox">
      <FontAwesomeIcon  className="navigation__categories__iconBox__icon" icon={faBars} />
      </div>
       <p className="navigation__categories__text">All Categories</p>


    </div>
  );
};

export default NavigationCateogry;

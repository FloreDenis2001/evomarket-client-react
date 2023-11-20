import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface NavigationItemCardMobileProps {
  icon: any;
}

const NavigationItemCardMobile: React.FC<NavigationItemCardMobileProps> = ({icon}) => {
  return (
    <li>
      <a className="navigation__mobile__link" href="#home">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};

export default NavigationItemCardMobile;

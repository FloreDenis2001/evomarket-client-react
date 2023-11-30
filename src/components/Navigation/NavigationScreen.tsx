import { faHeart, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import SearchBox from '../SearchBox'
import Logo from '../Logo'
import NavigationItemCard from './NavigationItemCard'
import { Link, useNavigate } from 'react-router-dom'

const NavigationScreen: React.FC= () => {
  
    const [isModalOpen, setModalOpen] = useState(false);

    const handleItemClick = () => {
      setModalOpen(true);
    };

    return (
        <header>
            <Logo />
            <SearchBox />
            <div className="navigation__desktop">
                <ul className="navigation__desktop__list">
                 <NavigationItemCard title={"Profile"}  icon={faUser} path={"/myaccount"} />
                 <NavigationItemCard title={"Favourite"}  icon={faHeart} path={"/favourite"}  />
                 <NavigationItemCard title={"Cart"}  icon={faShoppingBag} path={"/shoppingBag"}  />
                 
                </ul>
            </div>
        </header>
    )
}

export default NavigationScreen
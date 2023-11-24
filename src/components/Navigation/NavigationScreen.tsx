import { faHeart, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SearchBox from '../SearchBox'
import Logo from '../Logo'
import NavigationItemCard from './NavigationItemCard'
import { useNavigate } from 'react-router-dom'

const NavigationScreen = () => {
    return (
        <header>
            <Logo />
            <SearchBox />
            <div className="navigation__desktop">
                <ul className="navigation__desktop__list">
                 <NavigationItemCard title={"My Account"}  icon={faUser} />
                 <NavigationItemCard title={"Favourite"}  icon={faHeart} />
                 <NavigationItemCard title={"Cart"}  icon={faShoppingBag} />
                </ul>
            </div>
        </header>
    )
}

export default NavigationScreen
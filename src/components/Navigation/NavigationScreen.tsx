import { faHeart, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SearchBox from '../ui/SearchBox'
import Logo from '../ui/Logo'

const NavigationScreen = () => {
    return (
        <header>
            <Logo />
            <SearchBox />
            <div className="navigation__desktop">
                <ul className="navigation__desktop__list">
                    <li>
                        <a href="#contact" className="navigation__desktop__link">
                            <FontAwesomeIcon className='navigation__desktop__link__icon' icon={faUser} />
                            <span>My Account</span>
                        </a>
                    </li>

                    <li>
                        <a className="navigation__desktop__link" href="#fav">
                            <FontAwesomeIcon className='navigation__desktop__link__icon' icon={faHeart} />
                            <span>Favourite</span>
                        </a>
                    </li>

                    <li>
                        <a className="navigation__desktop__link" href="#cart">
                            <FontAwesomeIcon className='navigation__desktop__link__icon' icon={faShoppingBag} />
                            <span>Cart</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavigationScreen
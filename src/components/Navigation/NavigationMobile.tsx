import React from 'react'
import { faBarsStaggered, faCircleUser, faHeart, faHomeAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavigationMobile = () => {
    return (
        <aside className="navigation__mobile">
            <ul className="navigation__mobile__list">
                <li>
                    <a className="navigation__mobile__link__active" href="#home"><FontAwesomeIcon icon={faHomeAlt} /></a>
                </li>

                <li>
                    <a className="navigation__mobile__link" href="#about">  <FontAwesomeIcon  icon={faBarsStaggered} /></a>
                </li>

                <li>
                    <a href="#skills" className="navigation__mobile__link"> <FontAwesomeIcon icon={faShoppingBag} /></a>
                </li>

                <li>
                    <a href="#project" className="navigation__mobile__link"> <FontAwesomeIcon icon={faHeart} /></a>
                </li>

                <li>
                    <a href="#contact" className="navigation__mobile__link">

                        <FontAwesomeIcon icon={faCircleUser} />
                    </a>
                </li>


            </ul>
        </aside>
    )
}

export default NavigationMobile
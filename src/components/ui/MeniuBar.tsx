import {  faBarsStaggered, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'; // Don't forget to import useState

const MeniuBar = () => {
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

    const toggleProductsDropdown = () => {
        setProductsDropdownOpen(true);
    };
    const toggleProductsUp = () => {
        setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 1500);
    };

    return (
        <div className="menu">
            <aside className="meniuBar">
                <div className="meniuBar__list">
                    <li>
                        <a className="meniuBar__link" href="#home"
                            onMouseEnter={toggleProductsDropdown}
                            onClick={toggleProductsDropdown}
                        >
                            <i className='bx bx-menu-alt-left'></i>
                            <FontAwesomeIcon className="search-icon" icon={faBarsStaggered} />
                            <p className='meniuBar__link__title'>Products</p>
                            <FontAwesomeIcon className="search-icon" icon={faCaretDown} />
                        </a>
                        {isProductsDropdownOpen &&
                            <div className='dropdown__main' onMouseLeave={toggleProductsUp}>
                                <div className='section'>
                                    <a href="#" className='dropdown__title'>Electronics</a>
                                    <div className="dropdown__content">
                                        <ul>
                                            <li className='dropdown__content__list'><a href="#">Camera & Photo</a></li>
                                            <li className='dropdown__content__list'><a href="#">Accessories & Supplies</a></li>
                                            <li className='dropdown__content__list'><a href="#">Headphones</a></li>
                                            <li className='dropdown__content__list'><a href="#">Television & Video</a></li>
                                            <li className='dropdown__content__list'><a href="#">Video Game Consoles & Accessories</a></li>
                                            <li className='dropdown__content__list'><a href="#">Portable Audio & Video</a></li>
                                            <li className='dropdown__content__list'><a href="#">GPS & Navigation</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='section'>
                                    <a className='dropdown__title' href="#">Computers</a>
                                    <div className="dropdown__content">

                                        <ul>
                                            <li className='dropdown__content__list'><a href="#">Computer Components</a></li>
                                            <li className='dropdown__content__list'><a href="#">Computer & Tablets</a></li>
                                            <li className='dropdown__content__list'><a href="#">Monitors</a></li>
                                            <li className='dropdown__content__list'><a href="#">Computer Accessories & Peripherals</a></li>
                                            <li className='dropdown__content__list'><a href="#">Printers</a></li>
                                            <li className='dropdown__content__list'><a href="#">Scanners</a></li>
                                        </ul>


                                    </div>
                                </div>
                                <div className='section'>
                                    <a className='dropdown__title' href="#">Gaming</a>
                                    <div className="dropdown__content">

                                        <ul>

                                            <li className='dropdown__content__list'><a href="#">Desktop Gaming</a></li>
                                            <li className='dropdown__content__list' ><a href="#">Monitor Gaming</a></li>
                                            <li className='dropdown__content__list'><a href="#">PlayStation</a></li>
                                            <li className='dropdown__content__list'><a href="#">Xbox</a></li>
                                            <li className='dropdown__content__list'><a href="#">Nintendo Switch</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        }
                    </li>

                    <li>
                        <a className="meniuBar__link" href="#home">Today's Deals</a>
                    </li>
                    <li>
                        <a className="meniuBar__link" href="#home">Customer Service</a>
                    </li>
                    <li>
                        <a className="meniuBar__link" href="#home">Gift Cards</a>
                    </li>
                    <li>
                        <a className="meniuBar__link" href="#home">Sell</a>
                    </li>
                </div>
            </aside>
        </div>
    );
}

export default MeniuBar;

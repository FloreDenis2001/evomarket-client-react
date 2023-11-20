import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SearchBox = () => {

    function handleFindProduct(){
        console.log('find product')
    }


    return (
        <div className="search-box">
            <input className="search-box__input" type="text" placeholder="Search EvoMarket" name="q" />
            <button onClick={()=>handleFindProduct()} className="search-box__button" type="submit">
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBox
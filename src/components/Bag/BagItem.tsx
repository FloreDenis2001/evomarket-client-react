import React from 'react'
import Product from '../../models/Product/Product';
import ProductBag from '../../models/Product/ProductBag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


interface BagProps {
    productBag: ProductBag;
}

const BagItem :React.FC<BagProps>= ({productBag}) => {
  return (

        <tr>
            <td>
                <img src="https://i.imgur.com/qFoHc8W.png" alt="" />
            </td>
              <td>{productBag.product.name}</td>
              <td>{productBag.quantity}</td>
              <td>{productBag.product.price}</td>
              <td>{productBag.product.price * productBag.quantity}</td>
                <td>
                    <button className="bag__containerItem__info__remove">
                    <FontAwesomeIcon icon={faXmark} />
                    </button>
                </td>
        </tr>
  
  )
}

export default BagItem
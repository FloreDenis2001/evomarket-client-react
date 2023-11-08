import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ProductContainerModal = () => {
  const [activeFilter, setActiveFilter] = useState('DESCRIPTION');

  const projectData = [
    {
      title: 'DESCRIPTION',
      text: "DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: 'SPECIFICATION',
      text: "SPECIFICATION Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: 'BENEFITS',
      text: "BENEFITS Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: 'DELIVERY',
      text: "DELIVERY Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
    {
      title: 'REVIEWS',
      text: "REVIEWS Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, repellendus earum eaque veritatis voluptatibus quae debitis nemo blanditiis? Veniam exercitationem, velit aliquam maiores quibusdam possimus dolore! Adipisci, recusandae aspernatur!",
    },
  ];

  const filteredProjects = projectData.filter((project) => project.title === activeFilter);


  return (
    <div className='product__containerModal'>
      <div className="product__containerModal__header">
        <h3 className='product__containerModal__header__title'>Iphone 13 PRO Max </h3>
        <span className='product__containerModal__header__subtitle'>Phones Category</span>
        <p className="product__containerModal__header__price">$660.00</p>
      </div>

      <div className="product__containerModal__main">
        <div className="product__containerModal__filter">
          {['DESCRIPTION','SPECIFICATION','BENEFITS','DELIVERY'].map((filter) => (
            <span
              key={filter}
              className={`product__containerModal__item${activeFilter === filter ? '__active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="product__containerModal__filterSection">
          {filteredProjects.map((product, index) => (
            <div key={index} className='product__card'>
              <p>{product.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="product__containerModal__inputBox">
        <button className='btn__primary'><FontAwesomeIcon icon={faShoppingBag} /> Add Cart</button>
      </div>
    </div>
  );
}

export default ProductContainerModal;

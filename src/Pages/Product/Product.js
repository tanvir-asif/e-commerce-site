import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    // console.log(product);

    const { img, name, price, brand, category } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Price: <span className='fs-5'>{price}$</span></p>

            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-2'>Add To Cart</span></button>
        </div>
    );
};

export default Product;
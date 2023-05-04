import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProduts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProduts(data))
    }, []);


    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container-fluid position'>
            {/* <h2>Total product {products.length}</h2> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className="card-container">
                    <h5>Order Summary</h5>
                    <span></span>
                    <p className='fw-semibold'>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
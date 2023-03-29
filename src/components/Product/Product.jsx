import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {id,name,seller,price,ratings,img} = props.product
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className="product-description">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p className='manufacturer'>
                    <small>Manufacturer {seller}</small>
                </p>
                <p>
                <small>Rating {ratings}</small>
                </p>
                <button onClick={()=>props.handleCart(props.product)} className='add-btn'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
           
        </div>
    );
};

export default Product;
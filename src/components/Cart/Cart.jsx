import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart)
    return (
        <div className='cart-container'>
            <h2>Orders</h2>
            <div className="cart-info">
                <p>Selected Items: {props.cart.length}</p>
            </div>

        </div>
    );
};

export default Cart;
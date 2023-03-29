import React, { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shopcontainer = () => {
    const [cart,setCart] = useState([])
    const handleCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <Products handleCart={handleCart}></Products>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shopcontainer;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = (props) => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='products-cotainer'>
            {
                products.map(product=><Product key={product.id} product={product} handleCart={props.handleCart}></Product>)
            }
        </div>
    );
};

export default Products;
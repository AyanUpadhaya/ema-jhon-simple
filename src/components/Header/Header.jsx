import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                
                <nav className='navbar'>
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Inventory</a>
                    <a href="">Login</a>
                </nav>
            </div>
            
            
        </div>
    );
};

export default Header;
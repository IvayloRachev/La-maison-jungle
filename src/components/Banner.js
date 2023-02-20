import React from 'react';
import Cart from './Cart';
import '../styles/Banner.css';
import logo from '../assets/logo.png'

const Banner = () => {
    const title = 'la maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt="la maison jungle" className='lmj-logo' />
            <h1>La maison jungle</h1>
            <Cart />
        </div>
    );
};

export default Banner;
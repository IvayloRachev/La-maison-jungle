import React from 'react';
import Cart from './Cart';
import '../styles/Banner.css';
import logo from '../assets/logo.png'
import Recommandation from './Recommandation';

const Banner = () => {
    const title = 'la maison jungle'
    return (
        <div className='lmj-banner-row'>
            <div className='lmj-banner'>
            <img src={logo} alt="la maison jungle" className='lmj-logo' />
            <h1>{title}</h1>
            <Cart />
            </div>
            <Recommandation />
        </div>
    );
};

export default Banner;
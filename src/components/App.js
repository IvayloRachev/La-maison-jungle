import { useState } from 'react';
import '../App.css';
import Banner from './Banner';
import ShopingList from './ShopingList';
import logo from '../assets/logo.png'
import Footer from './Footer';

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div className="App">
      <Banner>
        <img src={logo} alt="La maison jungle" className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <cart cart={cart} updateCart={updateCart}/>
        <ShopingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

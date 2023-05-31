import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           <nav className='header'>
              <img src={logo} alt="" />

              <div>
                 <Link to ="/shop">Shop</Link>
                 <Link to ="/orders">Oders</Link>
                 <Link to ="/inventory">Inventory</Link>
                 <Link to ="/about">About</Link>
                 <Link to ="/login">Login</Link>
              </div>
           </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // 

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">Your Logo</Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

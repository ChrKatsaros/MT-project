import React from 'react';
import headerIMG from '../assets/headerIMG.webp';
import '../components/header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header-container">
      <img src={headerIMG} className="header-img" alt="Header" />
      <div className="header-content">
        <span className="small-title">Elite Dominance Experience</span>
        <h1 className="main-title">
          <span>T</span>abitha <span>T</span>horne
        </h1>
        <p className="description">Enter My World</p>
        <Link to="/application">
          <button className="shop-button">Apply</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

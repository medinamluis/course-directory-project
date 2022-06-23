import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/" end>Home</NavLink></li>  {/* Use end instead of exact in NavLinks to exactly match path*/}
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers-featured">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;
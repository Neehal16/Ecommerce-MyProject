
import React from 'react';
import './Navbar.css'; 

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1 style={{color: "white"}}><i><span class="fa fa-bolt"></span> Smart Mobiles</i></h1>
      <a href="/"> Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/cart">  Cart ({cartCount})</a>
      <a href="/profile"> Profile</a>
    </nav>
  );
};

export default Navbar;


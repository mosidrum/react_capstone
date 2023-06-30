import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/blue-earth-removebg-preview.png';
import '../css/navbar.css';

const Navbar = () => (
  <header>
    <div className="left">
      <img src={logo} alt="planet" />
      <NavLink to="/"><h1>Global village</h1></NavLink>
    </div>

    <div className="menu-bar">
      <AiOutlineMenu />
    </div>

    <div className="right">
      <NavLink
        className="home"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="search-nav"
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        className="back"
        to="/"
      >
        Back
      </NavLink>
    </div>
  </header>
);

export default Navbar;

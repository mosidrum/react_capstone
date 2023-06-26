import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/blue-earth-removebg-preview.png';
import '../css/navbar.css';

const Navbar = () => {


  return (
    <header>
      <div>
        <img src={logo} alt="planet" />
        <NavLink to="/"><h1>Global village</h1></NavLink>
      </div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/facts">Facts</NavLink>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

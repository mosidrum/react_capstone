import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/blue-earth-removebg-preview.png';
import '../css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isSmallScreen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className={`${isOpen ? 'open' : ''}`}>
      <div className="left">
        <img src={logo} alt="planet" />
        <NavLink to="/"><h1>Global village</h1></NavLink>
      </div>

      <div
        className="menu-bar"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        <AiOutlineMenu />
      </div>

      <div className="right">
        <NavLink
          className="home"
          to="/"
          onClick={handleClick}
        >
          Home
        </NavLink>
        <NavLink
          className="search-nav"
          to="/search"
          onClick={handleClick}
        >
          Search
        </NavLink>
        <NavLink
          className="back"
          to="/"
          onClick={handleClick}
        >
          Back
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

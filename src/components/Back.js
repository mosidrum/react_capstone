import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/back.css';

const Back = () => (
  <div className="back">
    <NavLink to="/">
      <button
        className="back-btn"
        type="submit"
      >
        Back
      </button>
    </NavLink>
  </div>
);

export default Back;

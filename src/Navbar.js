// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <a className="navbar-a" href="/">Phone Book</a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="./newEntry">New Entry</a>
        </li>
        <li className="navbar-li">
          <a className="navbar-a" href="./newPhoneBook">New Phone Book</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
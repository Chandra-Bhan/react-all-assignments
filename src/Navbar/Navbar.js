import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div className={styles.navDiv}>
      <p className={styles.navHeading}>UI/UX design</p>
      <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutus">About us</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <CgProfile fontSize="2.5rem" className={styles.profileIcon} />
      </ul>

    </div>
  );
}

export default Navbar;

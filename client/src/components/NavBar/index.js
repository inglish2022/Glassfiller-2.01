import React from "react";
import './index.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBeer, faLaptop, faClipboard } from "@fortawesome/free-solid-svg-icons";




const NavBar = () => (
  <header>
  <img className="logo" src="../Glassfiller.png" alt="Glassfiller logo" />
  <nav>
    <ul className="nav__links">
      <li>
      <NavLink
      exact="true"
      activeclassname="active"
      className="home-nav"
      to="/"
    > 
      <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>Home
      </li>
      
      <li><NavLink
      exact="true"
      activeclassname="active"
      className="mybar-nav"
      to="/mybar"
    >
      <FontAwesomeIcon icon={faBeer} color="#4d4d4e" />
    </NavLink>My Bar</li>
    <li>
    <NavLink
      exact="true"
      activeclassname="active"
      className="login-nav"
      to="/login"
    >
      <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
    </NavLink>Login 
    </li>
    <li>
    <NavLink
        exact="true"
        activeclassname="active"
        className="signup-nav"
        to="/signup"
      >
        <FontAwesomeIcon icon={faClipboard} color="#4d4d4e" />
      </NavLink>Signup
    </li>
    </ul>
    </nav> 
</header>
);

export default NavBar;

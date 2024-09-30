import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavLogo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__img__wrapper">
            <img src={NavLogo} alt="" className="nav__img" />
          </Link>
          <div className="nav__links">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/models" className="nav__link">
              Vehicle Models
            </Link>
            <a href="#" className="nav__link disabled">
              Testimonials
            </a>
            <a href="#" className="nav__link disabled">
              Our Team
            </a>
            <a href="#" className="nav__link disabled">
              Contact
            </a>
          </div>
          <div className="nav__btns">
            <a href="" className="nav__link disabled">
              Sign In
            </a>
            <button className="nav__btns__register disabled">Register</button>
          </div>
          <button className="nav__menu" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="fa"/>
          </button>
        </div>
      </nav>
      <nav className={`menu ${menuOpen === true && "menu-open"}`}>
        <button className="menu__close" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="menu__links">
          <Link
            to="/"
            className="menu__link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/models"
            className="menu__link"
            onClick={() => setMenuOpen(false)}
          >
            Vehicle Models
          </Link>
          <a
            href="#"
            className="menu__link disabled"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#"
            className="menu__link disabled"
            onClick={() => setMenuOpen(false)}
          >
            Our Team
          </a>
          <a
            href="#"
            className="menu__link disabled"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;

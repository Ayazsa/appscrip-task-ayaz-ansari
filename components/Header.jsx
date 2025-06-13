"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import "../styles/Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (isNavOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavOpen]);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="main-header">
      <div className="header-top">
        {/* Left side (logo for all views) */}
        <div className="header-left">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <h1 className="site-title mobile-only">STREET VIBE</h1>
        </div>

        {/* Center title (desktop only) */}
        <div className="header-center desktop-only">
          <h1 className="site-title">STREET VIBE</h1>
        </div>

        {/* Right side icons */}
        <div className="header-right">
          <FiSearch className="header-icon" />
          <FiHeart className="header-icon" />
          <FiShoppingBag className="header-icon" />
          <FiUser className="header-icon" />
          <div className="lang-selector">
            <span>ENG ▼</span>
          </div>
          <button className="hamburger-btn" onClick={() => setIsNavOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="header-bottom desktop-nav">
        <ul className="nav-links">
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">STORIES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>

      {/* Backdrop */}
      {isNavOpen && <div className="backdrop" />}

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isNavOpen ? "open" : ""}`} ref={navRef}>
        <button className="close-btn" onClick={closeNav}>
          <FiX size={28} />
        </button>
        <ul className="nav-links mobile-links">
          <li>
            <a href="#" onClick={closeNav}>
              SHOP
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              STORIES
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

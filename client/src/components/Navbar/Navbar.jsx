import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="TRED logo" />
      </div>

      {/* Botão Mobile */}
      <div className="navbar-hamburger" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}

      {/* Menu mobile */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <button className="navbar-close" onClick={closeMenu}>×</button>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
        </ul>
      </nav>

      {/* Menu Desktop */}
      <nav className="nav-desktop">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

import "./Header.css";
import logo from "../assets/shared/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <img src={logo} alt="Space Tourism Logo" className="logo" />

      {/* Botão hamburger para mobile */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu de navegação */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          00 HOME
        </Link>
        <Link to="/destination" onClick={closeMenu}>
          01 DESTINATION
        </Link>
        <Link to="/crew" onClick={closeMenu}>
          02 CREW
        </Link>
        <Link to="/technology" onClick={closeMenu}>
          03 TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

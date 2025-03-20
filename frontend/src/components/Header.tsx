import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalogo</Link></li>
          <li><Link to="/brands">Marcas</Link></li>
          <li><Link to="/about-us">Sobre nós</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

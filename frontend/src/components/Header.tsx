import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/marcas">Marcas</Link></li>
          <li><Link to="/quem-somos">Quem Somos?</Link></li>
          <li><Link to="/duvidas">Dúvidas Frequentes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

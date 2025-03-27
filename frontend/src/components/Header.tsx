import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const toggleBrandsMenu = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li><Link to="/">Home</Link></li>

          <li className="brands-dropdown">
            <span className="brands-link" onClick={toggleBrandsMenu}>Marcas ▾</span>
            {isBrandsOpen && (
              <ul className="brands-submenu">
                <li><Link to="/brands/adidas">Adidas</Link></li>
                <li><Link to="/brands/new-balance">New Balance</Link></li>
                <li><Link to="/brands/nike">Nike</Link></li>
                <li><Link to="/brands/puma">Puma</Link></li>
                <li><Link to="/brands/all">Todas Chuteiras</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about-us">Sobre nós</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

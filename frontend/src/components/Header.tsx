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
          <li><Link to="/catalog">Catálogo</Link></li>
          <li><Link to="/about-us">Sobre nós</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

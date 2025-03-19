import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaShoppingCart, FaHeart, FaHeadset, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botão de Menu */}
        <button className="menu-btn">
          <FaBars />
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          <img src="../../public/imagens/logo.jpeg" alt="Logo" />
        </Link>

        {/* Barra de Pesquisa */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="O que você procura?" />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Login */}
        <Link to="/login" className="login-icon">
          <FaUserCircle />
          <span>Entrar / Cadastrar</span>
        </Link>

        {/* Ícones de Contato, Favoritos e Carrinho */}
        <div className="icons">
          <Link to="/contato" className="icon">
            <FaHeadset />
            <span>Fale Conosco</span>
          </Link>
          <Link to="/favoritos" className="icon">
            <FaHeart />
            <span>Favoritos</span>
          </Link>
          <Link to="/cart" className="icon">
            <FaShoppingCart />
            <span>Carrinho</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

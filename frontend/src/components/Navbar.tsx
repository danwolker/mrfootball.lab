import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUserCircle,
  FaShoppingCart,
  FaHeart,
  FaHeadset,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Seção Esquerda */}
          <div className="left-section">
            <button className="menu-btn">
              <FaBars />
            </button>
            <Link to="/" className="logo">
              <img src="/imagens/logo.jpeg" alt="Logo" />
            </Link>
          </div>

          {/* Seção Central */}
          <div className="center-section">
            <div className="search-container">
              <input type="text" className="search-input" placeholder="O que você procura?" />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Seção Direita */}
          <div className="right-section">
            <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
              <FaUserCircle />
              <span>Entrar / Cadastrar</span>
            </button>
            <Link to="/contato" className="icon">
              <FaHeadset />
              <span>Fale Conosco</span>
            </Link>
            <Link to="/favorites" className="icon">
              <FaHeart />
              <span>Favoritos</span>
            </Link>
            <div className="cart-container">
              <button className="cart-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
                <FaShoppingCart />
                <span>Carrinho</span>
              </button>

              {isCartOpen && (
                <div className="cart-sidebar">
                  <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                    <FaTimes />
                  </button>
                  <h2>Seu Carrinho</h2>
                  <p>Ainda não há itens no carrinho.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="login-modal">
          <div className="login-box">
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>
              <FaTimes />
            </button>
            <h2>Entrar</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Digite seu e-mail" required />
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha" required />
              <button type="submit" className="login-submit">Entrar</button>
            </form>
            <div className="login-links">
              <Link to="/recuperar-senha">Esqueci minha senha</Link>
              <Link to="/cadastro">Criar conta</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



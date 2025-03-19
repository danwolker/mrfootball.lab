import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importa o CSS
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <div className="container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="/imagens/logo.jpeg" alt="Logo" />
        </Link>

        {/* MENU CENTRAL */}
        <ul className="nav-links">
          <li><Link to="/products">Produtos</Link></li>
          <li><Link to="/about">Quem Somos</Link></li>
          <li><Link to="/faq">Dúvidas</Link></li>
        </ul>

        {/* PESQUISA + ÍCONES JUNTOS */}
        <div className="right-section">
          {/* CAMPO DE PESQUISA */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar"
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* ÍCONES DO CARRINHO E PERFIL */}
          <div className="icons">
            <Link to="/cart">
              <FaShoppingCart className="icon-cart" />
            </Link>
            <Link to="/login">
              <FaUserCircle className="icon-login" />
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

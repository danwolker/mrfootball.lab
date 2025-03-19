import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importa o CSS
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <div className="container">
        
        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
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
              placeholder="Buscar no site..."
            />
            <button className="search-btn">🔍</button>
          </div>

          {/* ÍCONES (Carrinho e Perfil) */}
          <div className="icons">
            <Link to="/cart">
              <img src="/cart.png" alt="Carrinho" className="icon" />
            </Link>
            <Link to="/login">
              <img src="/profile.png" alt="Perfil" className="icon" />
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

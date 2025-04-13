import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="mobile-hidden"><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catálogo</Link></li>
          <li className="mobile-hidden"><Link to="/about-us">Sobre nós</Link></li>
          <li className="mobile-hidden"><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

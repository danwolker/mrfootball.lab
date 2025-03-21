import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-bottom">
      <p>© {year} Mr Football Lab. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;

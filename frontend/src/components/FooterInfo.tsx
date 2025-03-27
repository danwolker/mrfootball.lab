import React from "react";
import { Link } from "react-router-dom";
import "../styles/FooterInfo.css";

const FooterInfo: React.FC = () => {
  return (
    <div className="footer-info">
      <div className="footer-column">
        <h4>Institucional</h4>
        <ul>
          <li><Link to="/faq#privacidade">Política de Privacidade</Link></li>
          <li><Link to="/faq#termos">Termos de Uso</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Atendimento</h4>
        <ul>
          <li><Link to="/faq#fale-conosco">Fale Conosco</Link></li>
          <li><Link to="/faq#duvidas">Dúvidas Frequentes</Link></li>
          <li><Link to="/faq#trocas">Trocas e Devoluções</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Ajuda</h4>
        <ul>
          <li><Link to="/faq#pagamento">Formas de Pagamento</Link></li>
          <li><Link to="/faq#prazo">Prazo de Entrega</Link></li>
          <li><Link to="/faq#seguranca">Segurança</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterInfo;

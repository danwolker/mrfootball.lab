import React from "react";
import { Link } from "react-router-dom";
import "../styles/FooterInfo.css";

const FooterInfo: React.FC = () => {
  return (
    <div className="footer-info">
      <div className="footer-column">
        <h4>Institucional</h4>
        <ul>
          <li><Link to="/faq#privacidade"><span>Política de Privacidade</span></Link></li>
          <li><Link to="/faq#termos"><span>Termos de Uso</span></Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Atendimento</h4>
        <ul>
          <li><Link to="/faq#fale-conosco"><span>Fale Conosco</span></Link></li>
          <li><Link to="/faq#duvidas"><span>Dúvidas Frequentes</span></Link></li>
          <li><Link to="/faq#trocas"><span>Trocas e Devoluções</span></Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Ajuda</h4>
   
          <ul>
        
          <li><Link to="/faq#pagamento"><span>Formas de Pagamento</span></Link></li>
          <li><Link to="/faq#prazo"><span>Prazo de Entrega</span></Link></li>
          <li><Link to="/faq#seguranca"><span>Segurança</span></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterInfo;

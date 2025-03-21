import React from "react";
import "../styles/FooterInfo.css";

const FooterInfo: React.FC = () => {
  return (
    <div className="footer-info">
      <div className="footer-column">
        <h4>Institucional</h4>
        <ul>
          <li>Sobre Nós</li>
          <li>Política de Privacidade</li>
          <li>Termos de Uso</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Atendimento</h4>
        <ul>
          <li>Fale Conosco</li>
          <li>Dúvidas Frequentes</li>
          <li>Trocas e Devoluções</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Ajuda</h4>
        <ul>
          <li>Formas de Pagamento</li>
          <li>Prazo de Entrega</li>
          <li>Segurança</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterInfo;

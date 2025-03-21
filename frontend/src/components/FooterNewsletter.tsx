import React from "react";
import "../styles/FooterNewsletter.css";

const FooterNewsletter: React.FC = () => {
  return (
    <div className="footer-newsletter">
      <h3>Receba nossas novidades!</h3>
      <p>
        Fique por dentro de todas as novidades, promoções e muito mais!, inscreva-se em nossa newsletter.
        </p>
      <form className="newsletter-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <input type="text" placeholder="WhatsApp (opcional)" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FooterNewsletter;

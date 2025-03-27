import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import "../styles/FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <section className="faq-section">
        <h1 className="faq-title">Perguntas Frequentes</h1>

        <div className="faq-item">
          <h3>🔒 Política de Privacidade</h3>
          <p>Seus dados estão seguros conosco! Utilizamos criptografia e não compartilhamos suas informações com terceiros sem autorização.</p>
        </div>

        <div className="faq-item">
          <h3>📃 Termos de Uso</h3>
          <p>Ao utilizar nosso site, você concorda com nossas diretrizes de compra, uso responsável e respeito às políticas comerciais vigentes.</p>
        </div>

        <div className="faq-item">
          <h3>📞 Fale Conosco</h3>
          <p>Você pode entrar em contato com nosso time de atendimento pelo WhatsApp, e-mail ou redes sociais. Estamos aqui para te ajudar!</p>
        </div>

        <div className="faq-item">
          <h3>❓ Dúvidas Frequentes</h3>
          <p>Reunimos aqui as perguntas mais comuns sobre entregas, pagamentos e nossos produtos. Continue lendo abaixo!</p>
        </div>

        <div className="faq-item">
          <h3>🔁 Trocas e Devoluções</h3>
          <p>Você pode solicitar troca ou devolução em até 7 dias após o recebimento, desde que o produto esteja em perfeito estado.</p>
        </div>

        <div className="faq-item">
          <h3>💳 Formas de Pagamento</h3>
          <p>Aceitamos cartões de crédito, débito, Pix e boleto. Parcelamento em até 6x sem juros disponível em pedidos acima de R$ 150.</p>
        </div>

        <div className="faq-item">
          <h3>🚚 Prazo de Entrega</h3>
          <p>Os prazos variam de acordo com a região. Em Santa Catarina, entregamos em até 5 dias úteis. Para outras regiões, pode variar entre 7 e 10 dias úteis.</p>
        </div>

        <div className="faq-item">
          <h3>🔐 Segurança</h3>
          <p>Utilizamos tecnologias de segurança como SSL, proteção contra fraudes e verificação em duas etapas para garantir uma experiência segura.</p>
        </div>
      </section>

      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default FAQ;

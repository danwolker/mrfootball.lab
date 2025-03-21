import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../styles/Home.css";
import FooterNewsletter from "../components/FooterNewsletter";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title />
      <div className="Home">
        <h1>Bem-vindo ao Mr Football Lab</h1>
        <p>Seu e-commerce especializado em chuteiras de futebol.</p>
      </div>
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Home;

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../styles/Home.css";
import FooterNewsletter from "../components/FooterNewsletter";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";
import Title from "../components/Title";
import ProductCardCarousel from "../components/ProductCardCarousel";
import Banner from "../components/Banner";
import BrandsSection from "../components/BrandsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title />
      <ProductCardCarousel />

      {/* <div className="Home">
        <h1>Bem-vindo ao Mr Football Lab</h1>
        <p>Seu e-commerce especializado em chuteiras de futebol.</p>
      </div> */}
      <Banner />
      <BrandsSection />
      <FooterNewsletter />
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default Home;

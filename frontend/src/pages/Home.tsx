import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <h1>Bem-vindo ao Mr Football Lab</h1>
        <p>Seu e-commerce especializado em chuteiras de futebol.</p>
      </div>
    </div>
  );
};

export default Home;

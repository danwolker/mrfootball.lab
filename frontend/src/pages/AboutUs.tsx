import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FooterInfo from "../components/FooterInfo";
import Footer from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>About Us</h1>
      <FooterInfo />
      <Footer />
    </div>
  );
};

export default AboutUs;

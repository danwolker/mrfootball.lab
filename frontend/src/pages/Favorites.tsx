import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Favorites: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>Favorites</h1>
      <p>Your favorite products will appear here.</p>
    </div>
  );
};

export default Favorites;

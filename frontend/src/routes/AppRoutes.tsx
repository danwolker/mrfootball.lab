import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Brands from "../pages/Brands";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Favorites from "../pages/Favorites";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
);

export default AppRoutes;

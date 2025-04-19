import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Brands from "../pages/Brands";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Favorites from "../pages/Favorites";
import Finish from "../pages/Finish";
import DetailProduct from "../pages/DetailProduct";
import ProductRegistration from "../components/ProductRegistration/ProductRegistrationForm";
// Páginas de marcas


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/brands" element={<Brands />} />


      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="/product-registration" element={<ProductRegistration/>} />
      <Route path="/product-detail/:id" element={<DetailProduct />} />

      <Route path="/finish" element={<Finish />} />
    </Routes>
  </Router>
);

export default AppRoutes;

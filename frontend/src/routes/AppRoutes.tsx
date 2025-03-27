import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Brands from "../pages/Brands";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Favorites from "../pages/Favorites";

// Páginas de marcas
import AdidasPage from "../pages/brands/AdidasPage";
import NewBalancePage from "../pages/brands/NewBalancePage";
import NikePage from "../pages/brands/NikePage";
import PumaPage from "../pages/brands/PumaPage";
import AllBrandsPage from "../pages/brands/AllBrandsPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/brands" element={<Brands />} />

      {/* Páginas por marca */}
      <Route path="/brands/adidas" element={<AdidasPage />} />
      <Route path="/brands/new-balance" element={<NewBalancePage />} />
      <Route path="/brands/nike" element={<NikePage />} />
      <Route path="/brands/puma" element={<PumaPage />} />
      <Route path="/brands/all" element={<AllBrandsPage />} />

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
);

export default AppRoutes;

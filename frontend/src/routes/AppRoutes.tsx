import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Brands from "../pages/Brands";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Favorites from "../pages/Favorites";
import Finish from "../pages/Finish";
import DetailProduct from "../pages/DetailProduct";
import ProductRegistrationPage from "../components/ProductRegistration/ProductPage";
import PrivateRoute from "../components/ProductRegistration/PrivateRoute";
import { AuthProvider } from "../components/ProductRegistration/useAuth";
import LoginAdmin from "../components/ProductRegistration/LoginAdmin";
// Páginas de marcas

const AppRoutes = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/brands" element={<Brands />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/admin-login" element={<LoginAdmin />}/>
        <Route
          path="/product-registration"
          element={
            <PrivateRoute>
              <ProductRegistrationPage />{" "}
            </PrivateRoute>
          }
        />

        <Route path="/product-detail/:id" element={<DetailProduct />} />

        <Route path="/finish" element={<Finish />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default AppRoutes;

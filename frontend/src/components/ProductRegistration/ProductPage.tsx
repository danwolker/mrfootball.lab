import NavAdmin from "./NavAdmin";
import SidebarRegistration from "./Sidebar";
import SoccerBootRegistrationForm from "./SoccerBootRegistrationForm";
import "../ProductRegistration/ProductPage.css";
import { RegistryProvider } from "../../contexts/RegistryContext";

const ProductRegistrationPage: React.FC = () => {
  return (
    <RegistryProvider>
      <div className="registration-page">
        <div className="main-container">
          <NavAdmin />
        </div>
        <div className="registration-container">
          <SidebarRegistration />
          <SoccerBootRegistrationForm />
        </div>
      </div>
    </RegistryProvider>
  );
};

export default ProductRegistrationPage;

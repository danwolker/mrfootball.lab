import NavAdmin from "./NavAdmin";
import SidebarRegistration from "./SidebarRegistry";
import SoccerBootRegistrationForm from "./SoccerBootRegistrationForm";
import "../ProductRegistration/ProductPage.css";
import { RegistryProvider } from "../../contexts/RegistryContext";

const ProductRegistrationPage: React.FC = () => {
  return (
    <RegistryProvider>
      <div className="registration-page">
        <div className="main-container-registration">
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

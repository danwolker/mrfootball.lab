import NavAdmin from "./NavAdmin";
import SidebarRegistration from "./SidebarRegistry";
import SoccerBootRegistrationForm from "./SoccerBootRegistrationForm";
import "../ProductRegistration/ProductPage.css";
import { RegistryProvider } from "../../contexts/RegistryContext";
import { AuthProvider } from "./useAuth";

const ProductRegistrationPage: React.FC = () => {
  return (
    <RegistryProvider>
      <AuthProvider>
        <div className="registration-page">
          <div className="main-container-registration">
            <NavAdmin />
          </div>
          <div className="registration-container">
            <SidebarRegistration />
            <SoccerBootRegistrationForm />
          </div>
        </div>
      </AuthProvider>
    </RegistryProvider>
  );
};

export default ProductRegistrationPage;

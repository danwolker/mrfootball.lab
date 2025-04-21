import NavAdmin from "./NavAdmin"
import SidebarRegistration from "./Sidebar"
import SoccerBootRegistrationForm from "./SoccerBootRegistrationForm"
import "../ProductRegistration/ProductPage.css"


const ProductRegistrationPage: React.FC = () => {
    return (
        <div className="registration-page">
            <div className="main-container">
                <NavAdmin />
            </div>
            <div className="registration-container">
                <SidebarRegistration />
                <SoccerBootRegistrationForm />
            </div>
        </div>
       
    )
}

export default ProductRegistrationPage;
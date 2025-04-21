import NavAdmin from "./NavAdmin"
import SidebarRegistration from "./Sidebar"
import SoccerBootRegistrationForm from "./SoccerBootRegistrationForm"


const ProductRegistrationPage: React.FC = () => {
    return (
        <div>
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
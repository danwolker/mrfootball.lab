import { Link } from "react-router-dom";
import "../ProductRegistration/NavAdmin.css"

const NavAdmin: React.FC = () => {
    return(
        <nav className="nav-container">
            <ul className="login-logout-container">
                <li><Link className="nav-link" to={"/loginAdmin"}> Login </Link> </li>
                <li><Link className="nav-link" to={"/logoutAdmin"}> Logout </Link> </li>
            </ul>
        </nav>
    )
}

export default NavAdmin;
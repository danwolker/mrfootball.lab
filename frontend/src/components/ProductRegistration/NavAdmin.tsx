import { Link } from "react-router-dom";
import "../ProductRegistration/NavAdmin.css";
import React, { useState } from "react";
import { login } from "./AuthApi";
const NavAdmin: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    login(email,password)
  };

  return (
    <div>
      <nav className="nav-admin-container">
        <ul className="login-logout-container">
          <li>
            <button onClick={() => setIsLoginOpen(true)}>Login</button>
          </li>
          <li>
            <Link className="nav-link" to={"/logoutAdmin"}>
              {" "}
              Logout{" "}
            </Link>{" "}
          </li>
        </ul>
      </nav>
      {isLoginOpen && (
        <div className="login">
          <div className="login-input-div">
            <label htmlFor="username">E-mail: </label>
            <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="text" />
          </div>
          <div className="login-input-div">
            <label htmlFor="password">Senha: </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>
          <button
            onClick={handleLogin}
            className="submit-login-button"
            type="submit"
          >
            Entrar
          </button>
        </div>
      )}
    </div>
  );
};

export default NavAdmin;

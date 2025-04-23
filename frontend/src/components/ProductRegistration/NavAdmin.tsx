import "../ProductRegistration/NavAdmin.css";
import React, { useState } from "react";
import { login, logout } from "./AuthApi";
import { useNavigate } from "react-router-dom"


const NavAdmin: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()
  
  const handleLogin = () => {
    login(email,password)
  };

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      nav("/catalog")
      window.alert('voce foi desconectado')
    }
  }

  return (
    <div>
      <nav className="nav-admin-container">
        <ul className="login-logout-container">
          <li>
            <button onClick={() => setIsLoginOpen(true)}>Login</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
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
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" />
          </div>
          <button
            onClick={handleLogin}
            className="submit-login-button"
          >
            Entrar
          </button>
        </div>
      )}
    </div>
  );
};

export default NavAdmin;

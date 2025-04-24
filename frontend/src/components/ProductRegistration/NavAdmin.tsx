import "../ProductRegistration/NavAdmin.css";
import React, { useState } from "react";

import { login } from "./endpoints/api"


const NavAdmin: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    
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
            <input onChange={(e) => setUsername(e.target.value)} id="email" name="email" type="text" />
          </div>
          <div className="login-input-div">
            <label htmlFor="password">Senha: </label>
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavAdmin;

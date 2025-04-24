import { useState } from "react";
import { login } from "./AuthApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth"; // Importe o useAuth

const LoginAdmin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { checkAuth } = useAuth(); // Use o hook useAuth

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    
    try {
      const loginSuccess = await login(username, password);
      
      if (loginSuccess) {
        // Verifica a autenticação novamente para garantir
        await checkAuth();
        nav('/product-registration');
      } else {
        setError("Credenciais inválidas ou erro no servidor");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login-input-div">
          <label htmlFor="username">Usuário: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            type="text"
            required
          />
        </div>
        <div className="login-input-div">
          <label htmlFor="password">Senha: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" // Mude para type="password" para segurança
            name="password"
            id="password"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button 
          type="submit" 
          className="submit-login-button"
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
import { ReactNode, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}: {children: ReactNode}) => {
    const { isAuthenticated, loading, checkAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica a autenticação sempre que o componente é montado
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        // Redireciona se não estiver autenticado e não estiver carregando
        if (!loading && !isAuthenticated) {
            navigate('/catalog');
        }
    }, [isAuthenticated, loading, navigate]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return isAuthenticated ? children : null;
};

export default PrivateRoute;
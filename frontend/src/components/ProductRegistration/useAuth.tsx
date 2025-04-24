import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { is_authenticated, refresh_token } from "./AuthApi";

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = async () => {
        setLoading(true);
        try {
            const success = await is_authenticated();
            setIsAuthenticated(success);
        } catch (error) {
            // Se falhar, tenta renovar o token
            try {
                const refreshed = await refresh_token();
                setIsAuthenticated(refreshed);
            } catch (refreshError) {
                setIsAuthenticated(false);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Verificar autenticação inicial
        checkAuth();
        
        // Verificar periodicamente (opcional)
        const interval = setInterval(checkAuth, 300000); // 5 minutos
        
        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, loading, checkAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};  
import { createContext, useContext, useState, useEffect, ReactNode} from "react"
import { is_authenticated } from "./AuthApi"

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children:ReactNode}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const get_authenticated = async () => {
        try {
            const success = await is_authenticated();
            setIsAuthenticated(success)
        } catch {
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        get_authenticated()
    },[window.location.pathname])
    return (
        <AuthContext.Provider value={{isAuthenticated, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
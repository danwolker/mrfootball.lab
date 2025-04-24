import { createContext, useContext, useState, useEffect} from "react"
import { is_authenticated } from "./AuthApi"
const AuthContext = createContext(undefined)

export const AuthProvider = ({children}) => {
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
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
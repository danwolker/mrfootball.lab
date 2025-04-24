import { ReactNode } from "react";
import { useAuth } from "./AuthContexts";
import { useNavigate } from "react-router-dom";


export const PrivateRoute = ({children}:{children:ReactNode}) => {

    const { isAuthenticated, loading } = useAuth();
    const nav = useNavigate()

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (isAuthenticated) {
        return children
    } else {
        nav('/')
    }

}

export default PrivateRoute;
import React, { createContext, useContext, useState, useEffect} from 'react'



const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    return (  
    <AuthContext.Provider value={}>
        {children}
    </AuthContext.Provider>
    )
  
}

export const  useAuth = () => {}
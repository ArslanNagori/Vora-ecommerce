import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setuser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = (name,email) =>{
        setuser({name,email});
    }

    const logout = () =>{
        setuser(null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}} >
            {children}
        </AuthContext.Provider>
    )

    
}
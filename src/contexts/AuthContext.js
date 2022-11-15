import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user);
            } else {
                setLoggedUser(null);
            }
        })
        return () => {
            unsub();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, loggedUser }}>
            {children}
        </AuthContext.Provider>
    );
}
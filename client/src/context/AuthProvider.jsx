import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const auth = getAuth();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
        console.log('[From AuthProvider]', { user });
        if (user?.uid) {
            setUser(user);
            if (user.accessToken !== localStorage.getItem('accessToken')) {

            }
            return;
        }
        setUser({});
        localStorage.clear();
        navigate('/login');
        });

        return () => {
        unsubcribed();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
        {children}
        </AuthContext.Provider>
    );
}
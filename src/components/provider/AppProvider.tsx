import { createContext, useContext, useEffect, useState } from 'react';

import DiagramServices from '@/services/DiagramServices';
import type { Diagram } from '@/types/diagram';

interface User {
    email: string;
    name: string;
    picture?: string;
}

interface AppContextType {
    diagrams: Diagram[];
    setDiagrams: (diagrams: Diagram[]) => void;
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [diagrams, setDiagrams] = useState<Diagram[]>([]);
    const [user, setUser] = useState<User | null>(null);

    const logout = () => {
        localStorage.removeItem('googleToken');
        localStorage.removeItem('accessToken');
        setUser(null);
        setDiagrams([]);
        window.location.href = '/login';
    };

    useEffect(() => {
        const fetchDiagrams = async () => {
            try {
                const response = await DiagramServices.getDiagrams();
                setDiagrams(response);
            } catch (error) {
                console.error('Failed to fetch diagrams:', error);
                // If unauthorized, logout user
                if (
                    error &&
                    typeof error === 'object' &&
                    'status' in error &&
                    error.status === 401
                ) {
                    logout();
                }
            }
        };

        // Only fetch if we have valid tokens
        const googleToken = localStorage.getItem('googleToken');
        const accessToken = localStorage.getItem('accessToken');

        if (googleToken && accessToken) {
            fetchDiagrams();
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                diagrams,
                setDiagrams,
                user,
                setUser,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default AppProvider;

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
    startNavigation: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    const startNavigation = () => {
        setIsLoading(true);
        // Auto-hide loading after a minimum duration for better UX
        setTimeout(() => {
            setIsLoading(false);
        }, 800); // Adjust this duration as needed
    };

    return (
        <LoadingContext.Provider
            value={{
                isLoading,
                setLoading,
                startNavigation,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

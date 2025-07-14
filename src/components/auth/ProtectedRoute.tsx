import { useEffect, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
        // Check both Google token and access token
        const googleToken = localStorage.getItem('googleToken');
        const accessToken = localStorage.getItem('accessToken');

        // More robust authentication check
        if (googleToken && accessToken) {
            try {
                // Optionally validate token expiry here
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Token validation failed:', error);
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    // Loading state while checking authentication
    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login with return URL
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

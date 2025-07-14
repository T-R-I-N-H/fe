import { useEffect } from 'react';

import { useNavigateWithLoading } from '@/hooks/useNavigateWithLoading';
import AuthServices from '@/services/AuthServices';

import { type CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigateWithLoading = useNavigateWithLoading();
    const navigate = useNavigate();
    const location = useLocation();

    // Check if user is already authenticated
    useEffect(() => {
        const googleToken = localStorage.getItem('googleToken');
        const accessToken = localStorage.getItem('accessToken');

        if (googleToken && accessToken) {
            // User is already logged in, redirect to intended page or diagrams
            const from = (location.state as any)?.from?.pathname || '/diagrams';
            navigate(from, { replace: true });
        }
    }, [navigate, location]);

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        try {
            const token = credentialResponse.credential;
            if (!token) {
                console.error('No token received');
                return;
            }

            localStorage.setItem('googleToken', token);

            // Call the backend authentication service
            await AuthServices.login();

            // Redirect to the page they were trying to access, or default to diagrams
            const from = (location.state as any)?.from?.pathname || '/diagrams';
            navigateWithLoading(from);
        } catch (error) {
            console.error('Login failed:', error);
            // Clear any potentially invalid tokens
            localStorage.removeItem('googleToken');
            localStorage.removeItem('accessToken');
            alert('Login failed. Please try again.');
        }
    };

    const handleError = () => {
        console.error('Login Failed');
        alert('Google authentication failed. Please try again.');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to your account to continue</p>
                    </div>

                    {/* Google Login Button Container */}
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Secure authentication
                                </span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="text-center space-y-2">
                            <p className="text-sm text-gray-500">
                                By signing in, you agree to our Terms of Service and Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Need help?{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                            Contact Support
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

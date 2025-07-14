import { baseURL } from '@/lib/axios';

import axios from 'axios';

const AuthServices = {
    async login() {
        try {
            const googleToken = localStorage.getItem('googleToken');
            if (!googleToken) {
                throw new Error('No Google token found');
            }

            const { data: token } = await axios.post(`${baseURL}/auth/login`, {
                google_id_token: googleToken,
            });

            if (!token || !token.data) {
                throw new Error('Invalid response from server');
            }

            localStorage.setItem('accessToken', token.data);
            return token.data;
        } catch (error) {
            console.error('Login failed:', error);
            // Clear tokens on failure
            localStorage.removeItem('googleToken');
            localStorage.removeItem('accessToken');
            throw error;
        }
    },

    async logout() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                // Optional: Call backend logout endpoint
                await axios.post(
                    `${baseURL}/auth/logout`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                );
            }
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            // Always clear local tokens
            localStorage.removeItem('googleToken');
            localStorage.removeItem('accessToken');
        }
    },

    isAuthenticated() {
        const googleToken = localStorage.getItem('googleToken');
        const accessToken = localStorage.getItem('accessToken');
        return !!(googleToken && accessToken);
    },
};

export default AuthServices;

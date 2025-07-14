import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const instance = axios.create({
    baseURL,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         if (error.response && error.response.status === 403) {
//             const newToken = await handleRefreshToken();
//             console.log(newToken);
//             if (newToken) {
//                 localStorage.setItem('accessToken', newToken);
//                 error.config.headers['Authorization'] = `Bearer ${newToken}`;
//                 return axios.request(error.config);
//             }
//         }
//         return Promise.reject(error);
//     },
// );

// const handleRefreshToken = async () => {
//     try {
//         const googleToken = localStorage.getItem('googleToken');
//         const { data } = await axios.post(`${baseURL}/auth/login`, {
//             google_id_token: googleToken,
//         });
//         return data.data;
//     } catch (error) {
//         console.error('Error refreshing token:', error);
//         return Promise.reject(error);
//     }
// };

import { useLoading } from '@/contexts/LoadingContext';

import { useNavigate } from 'react-router-dom';

export const useNavigateWithLoading = () => {
    const navigate = useNavigate();
    const { startNavigation } = useLoading();

    const navigateWithLoading = (path: string) => {
        startNavigation();
        navigate(path);
    };

    return navigateWithLoading;
};

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import PacmanLoader from 'react-spinners/PacmanLoader';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const to = setTimeout(() => {
            navigate('/diagrams');
        }, 2000);
        return () => clearTimeout(to);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            <PacmanLoader color="#007f60" size={50} />
        </div>
    );
};

export default HomePage;

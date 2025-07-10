import MainLayout from './components/layout/MainLayout';
import DiagramDetailPage from './components/pages/DiagramDetailPage';
import HomePage from './components/pages/HomePage';
import ListDiagramPage from './components/pages/ListDiagramPage';
import LoginPage from './components/pages/LoginPage';
import LoadingOverlay from './components/ui/LoadingOverlay';
import { LoadingProvider } from './contexts/LoadingContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <LoadingProvider>
            <BrowserRouter>
                <LoadingOverlay />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/diagrams" element={<MainLayout />}>
                        <Route index element={<ListDiagramPage />} />
                        <Route path=":id" element={<DiagramDetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoadingProvider>
    );
}

export default App;

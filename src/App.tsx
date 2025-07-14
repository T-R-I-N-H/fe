import ProtectedRoute from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/common/ErrorBoundary';
import MainLayout from './components/layout/MainLayout';
import DiagramDetailPage from './components/pages/DiagramDetailPage';
import HomePage from './components/pages/HomePage';
import ListDiagramPage from './components/pages/ListDiagramPage';
import LoginPage from './components/pages/LoginPage';
import NewDiagram from './components/pages/NewDiagram';
import AppProvider from './components/provider/AppProvider';
import DiagramEditorProvider from './components/provider/DiagramEditorProvider';
import LoadingOverlay from './components/ui/LoadingOverlay';
import { LoadingProvider } from './contexts/LoadingContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ErrorBoundary>
            <LoadingProvider>
                <BrowserRouter>
                    <LoadingOverlay />
                    <Routes>
                        {/* Public routes */}
                        <Route path="/login" element={<LoginPage />} />

                        {/* Protected routes */}
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="/diagrams"
                            element={
                                <ProtectedRoute>
                                    <AppProvider>
                                        <DiagramEditorProvider>
                                            <MainLayout />
                                        </DiagramEditorProvider>
                                    </AppProvider>
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<ListDiagramPage />} />
                            <Route path="new" element={<NewDiagram />} />
                            <Route path=":id" element={<DiagramDetailPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LoadingProvider>
        </ErrorBoundary>
    );
}

export default App;

import { createContext, useContext, useState } from 'react';

import { xml } from '@/constants';
import type { Diagram, DiagramDetails } from '@/types/diagram';

type DiagramEditorContextType = {
    diagram: Diagram | DiagramDetails;
    setDiagram: (diagram: Diagram | DiagramDetails) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
};

const DiagramEditorContext = createContext<DiagramEditorContextType>(null as any);

const DiagramEditorProvider = ({ children }: { children: React.ReactNode }) => {
    const [diagram, setDiagram] = useState<Diagram | DiagramDetails>({
        diagram_id: '',
        diagram_data: xml,
        diagram_description: '',
        diagram_name: '',
        file_urls: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <DiagramEditorContext.Provider
            value={{
                diagram,
                setDiagram,
                isLoading,
                setIsLoading,
                error,
                setError,
            }}
        >
            {children}
        </DiagramEditorContext.Provider>
    );
};

export const useDiagramEditorContext = () => {
    return useContext(DiagramEditorContext);
};

export default DiagramEditorProvider;

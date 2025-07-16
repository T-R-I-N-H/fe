import { instance } from '@/lib/axios';
import type { Diagram, DiagramDetails } from '@/types/diagram';

const DiagramServices = {
    async createDiagram(formData: FormData): Promise<Diagram> {
        const { data } = await instance.post('/diagrams', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data.data;
    },
    async getDiagrams(): Promise<Diagram[]> {
        const response = await instance.get('/diagrams/mine');
        return response.data.data;
    },
    async getDiagramById(diagramId: string): Promise<DiagramDetails> {
        try {
            const response = await instance.get(`/diagrams/${diagramId}`);
            return response.data.data;
        } catch (error: any) {
            console.error('Failed to fetch diagram:', error);
            if (error.response?.status === 404) {
                throw new Error('Diagram not found');
            } else if (error.response?.status === 403) {
                throw new Error('You do not have permission to view this diagram');
            } else if (error.response?.status === 401) {
                throw new Error('Please log in to view this diagram');
            }
            throw new Error('Failed to load diagram. Please try again.');
        }
    },
    async updateDiagram(diagramId: string, diagramData: string): Promise<Diagram> {
        try {
            const response = await instance.put(
                `/diagrams`,
                {
                    diagram_id: diagramId,
                    diagram_data: diagramData,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            return response.data.data;
        } catch (error: any) {
            console.error('Failed to update diagram:', error);
            if (error.response?.status === 404) {
                throw new Error('Diagram not found');
            } else if (error.response?.status === 403) {
                throw new Error('You do not have permission to update this diagram');
            } else if (error.response?.status === 401) {
                throw new Error('Please log in to update this diagram');
            }
            throw new Error('Failed to save diagram. Please try again.');
        }
    },
    async optimizeDiagram(diagramId: string): Promise<any> {
        try {
            const response = await instance.post(`/diagrams/optimize`, {
                diagram_id: diagramId,
            });
            return response.data;
        } catch (error: any) {
            console.error('Failed to optimize diagram:', error);
            if (error.response?.status === 404) {
                throw new Error('Diagram not found');
            } else if (error.response?.status === 403) {
                throw new Error('You do not have permission to optimize this diagram');
            } else if (error.response?.status === 401) {
                throw new Error('Please log in to optimize this diagram');
            }
            throw new Error('Failed to optimize diagram. Please try again.');
        }
    },
    async benchmarkDiagram(diagramId: string): Promise<any> {
        try {
            const response = await instance.post(`/diagrams/benchmark`, {
                diagram_id: diagramId,
            });
            return response;
        } catch (error: any) {
            console.error('Failed to benchmark diagram:', error);
            if (error.response?.status === 404) {
                throw new Error('Diagram not found');
            } else if (error.response?.status === 403) {
                throw new Error('You do not have permission to benchmark this diagram');
            } else if (error.response?.status === 401) {
                throw new Error('Please log in to benchmark this diagram');
            }
            throw new Error('Failed to benchmark diagram. Please try again.');
        }
    },
};

export default DiagramServices;

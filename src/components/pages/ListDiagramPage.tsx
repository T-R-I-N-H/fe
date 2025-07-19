import { useMemo, useState } from 'react';

import { useAppContext } from '../provider/AppProvider';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useNavigateWithLoading } from '@/hooks/useNavigateWithLoading';
import DiagramServices from '@/services/DiagramServices';
import type { Diagram } from '@/types/diagram';

import { Calendar, Download, Edit, Eye, FileText, Plus, Search, Trash2 } from 'lucide-react';

const ListDiagramPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const { diagrams, refreshDiagrams } = useAppContext();
    const navigateWithLoading = useNavigateWithLoading();

    // Show loading spinner while diagrams are being fetched
    if (!diagrams) {
        return (
            <div className="container mx-auto py-8 px-4 max-w-7xl">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-600">Loading diagrams...</span>
                </div>
            </div>
        );
    }

    // Filter diagrams based on search term
    const filteredDiagrams = useMemo(() => {
        return diagrams?.filter(
            (diagram: Diagram) =>
                diagram.diagram_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                diagram.diagram_description.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    }, [diagrams, searchTerm]);

    const handleViewDiagram = (diagramId: string) => {
        console.log('View diagram:', diagramId);
        // Navigate to diagram view page
        navigateWithLoading(`/diagrams/${diagramId}`);
    };

    const handleEditDiagram = (diagramId: string) => {
        console.log('Edit diagram:', diagramId);
        // Navigate to diagram edit page
    };

    const handleDeleteDiagram = async (diagramId: string) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this diagram? This action cannot be undone.',
        );

        if (!confirmDelete) return;

        try {
            setDeletingId(diagramId);
            await DiagramServices.deleteDiagram(diagramId);

            // Refresh the diagrams list
            await refreshDiagrams();

            console.log('Diagram deleted successfully');
        } catch (error: any) {
            console.error('Failed to delete diagram:', error);
            alert(error.message || 'Failed to delete diagram. Please try again.');
        } finally {
            setDeletingId(null);
        }
    };

    const handleDownloadDiagram = (diagramId: string) => {
        console.log('Download diagram:', diagramId);
        // Download diagram as file
    };

    const handleCreateNew = () => {
        console.log('Create new diagram');
        // Navigate to create diagram page
        navigateWithLoading('/diagrams/new');
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="container mx-auto py-8 px-4 max-w-7xl">
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search diagrams by name or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2">
                    <Badge variant="secondary" className="px-3 py-1">
                        {filteredDiagrams.length} diagram{filteredDiagrams.length !== 1 ? 's' : ''}
                    </Badge>
                </div>
            </div>

            {/* Diagrams Grid */}
            {filteredDiagrams.length === 0 ? (
                <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                        No diagrams found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {searchTerm
                            ? 'Try adjusting your search terms or create a new diagram.'
                            : 'Get started by creating your first process diagram.'}
                    </p>
                    <Button onClick={handleCreateNew} variant="outline">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Diagram
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDiagrams.map((diagram: Diagram) => (
                        <Card
                            key={diagram.diagram_id}
                            className="hover:shadow-lg transition-shadow duration-200"
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-lg line-clamp-2">
                                        {diagram.diagram_name}
                                    </CardTitle>
                                    <div className="flex gap-1 ml-2">
                                        {diagram.file_urls?.length > 0 && (
                                            <Badge variant="outline" className="text-xs">
                                                {diagram.file_urls.length} file
                                                {diagram.file_urls.length !== 1 ? 's' : ''}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <CardDescription className="line-clamp-3">
                                    {diagram.diagram_description}
                                </CardDescription>
                            </CardHeader>

                            <CardFooter className="pt-3 border-t">
                                <div className="flex gap-2 w-full">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        onClick={() => handleViewDiagram(diagram.diagram_id)}
                                        className="flex-1 bg-[#007f60] hover:bg-[#006b52] text-white"
                                    >
                                        <Eye className="mr-1 h-3 w-3" />
                                        View
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDeleteDiagram(diagram.diagram_id)}
                                        disabled={deletingId === diagram.diagram_id}
                                        className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950 disabled:opacity-50"
                                    >
                                        {deletingId === diagram.diagram_id ? (
                                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-500"></div>
                                        ) : (
                                            <Trash2 className="h-3 w-3" />
                                        )}
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListDiagramPage;

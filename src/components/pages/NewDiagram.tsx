import React, { useRef, useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLoading } from '@/contexts/LoadingContext';
import { useNavigateWithLoading } from '@/hooks/useNavigateWithLoading';
import DiagramServices from '@/services/DiagramServices';

const NewDiagram = () => {
    const context = useDiagramEditorContext();
    const navitgate = useNavigateWithLoading();
    const { isLoading, setLoading } = useLoading();

    if (!context) {
        throw new Error('NewDiagram must be used within a DiagramEditorProvider');
    }

    const { setDiagram } = context;

    const [prompt, setPrompt] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            setFiles(Array.from(selectedFiles));
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!prompt.trim()) {
            alert('Please enter a prompt');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('prompt', prompt.trim());

            // Append each file to FormData
            files.forEach((file) => {
                formData.append('files', file);
            });

            const diagram = await DiagramServices.createDiagram(formData);

            // Set the created diagram in context
            if (diagram) {
                setDiagram(diagram);
                navitgate(`/diagrams/${diagram.diagram_id}`);
            }

            // Reset form after successful submission
            setPrompt('');
            setFiles([]);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('Error processing files:', error);
            alert('Error processing files. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Diagram</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                        {/* Prompt Input */}
                        <div className="space-y-2">
                            <label htmlFor="prompt" className="text-sm font-medium">
                                Prompt <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="prompt"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Enter your diagram description or prompt..."
                                className="w-full min-h-[120px] p-3 border rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        {/* File Upload */}
                        <div className="space-y-2">
                            <label htmlFor="files" className="text-sm font-medium">
                                Files <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                <Input
                                    ref={fileInputRef}
                                    id="files"
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="cursor-pointer"
                                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt,.json,.xml,.csv"
                                />
                                <p className="text-xs text-gray-500">
                                    Supported formats: Images, PDF, Documents, Text files, JSON,
                                    XML, CSV
                                </p>
                            </div>
                        </div>

                        {/* File List */}
                        {files.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium">
                                    Selected Files ({files.length})
                                </h4>
                                <div className="space-y-2 max-h-40 overflow-y-auto border rounded-md p-3">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-2 bg-gray-50 rounded border"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">
                                                    {file.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {formatFileSize(file.size)} •{' '}
                                                    {file.type || 'Unknown type'}
                                                </p>
                                            </div>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeFile(index)}
                                                className="ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setPrompt('');
                                setFiles([]);
                                if (fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                }
                            }}
                        >
                            Clear All
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading || !prompt.trim() || files.length === 0}
                        >
                            {isLoading ? 'Creating...' : 'Create Diagram'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default NewDiagram;

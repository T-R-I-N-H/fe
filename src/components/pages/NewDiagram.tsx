import React, { useRef, useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLoading } from '@/contexts/LoadingContext';
import { useNavigateWithLoading } from '@/hooks/useNavigateWithLoading';
import DiagramServices from '@/services/DiagramServices';

import { FileText, FileType, Image, Plus, Sparkles, Trash2, Upload, X } from 'lucide-react';

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
            // Append new files to existing files instead of replacing
            setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles) {
            // Append dropped files to existing files
            setFiles((prev) => [...prev, ...Array.from(droppedFiles)]);
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

    const getFileIcon = (file: File) => {
        if (file.type.startsWith('image/')) {
            return <Image className="w-4 h-4 text-blue-500" />;
        } else if (file.type.includes('pdf')) {
            return <FileText className="w-4 h-4 text-red-500" />;
        } else {
            return <FileType className="w-4 h-4 text-gray-500" />;
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto">
                <Card className="border-0 bg-white/80">
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-8">
                            {/* Prompt Input */}
                            <div className="space-y-3">
                                <label
                                    htmlFor="prompt"
                                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                                >
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                    Describe Your Diagram
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="prompt"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Describe the diagram you'd like to create. Be as detailed as possible for better results..."
                                        className="w-full min-h-[140px] p-4 border-2 border-gray-200 rounded-xl resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                                        required
                                    />
                                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                                        {prompt.length}/1000
                                    </div>
                                </div>
                            </div>

                            {/* File Upload */}
                            <div className="space-y-3">
                                <label
                                    htmlFor="files"
                                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                                >
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    Upload Supporting Files
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input
                                            ref={fileInputRef}
                                            id="files"
                                            type="file"
                                            multiple
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept=".pdf,.docx,.bpmn"
                                        />
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleDrop}
                                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200 group"
                                        >
                                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                                            <p className="text-lg font-medium text-gray-700 mb-2">
                                                Drop multiple files here or click to browse
                                            </p>
                                            <p className="text-sm text-gray-500 mb-3">
                                                Support: PDF, DOCX, BPMN files only
                                            </p>
                                            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                                <Plus className="w-3 h-3" />
                                                <span>You can add files multiple times</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick add more files button */}
                                    {files.length > 0 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="w-full border-dashed border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50/30 text-gray-600 hover:text-blue-600 transition-all duration-200"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add More Files
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* File List */}
                            {files.length > 0 && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                            Selected Files ({files.length})
                                        </h4>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                setFiles([]);
                                                if (fileInputRef.current) {
                                                    fileInputRef.current.value = '';
                                                }
                                            }}
                                            className="text-gray-500 hover:text-red-500"
                                        >
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Clear All
                                        </Button>
                                    </div>
                                    <div className="grid gap-3 max-h-60 overflow-y-auto pr-2">
                                        {files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 group"
                                            >
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    {getFileIcon(file)}
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium truncate text-gray-800">
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {formatFileSize(file.size)} •{' '}
                                                            {file.type || 'Unknown type'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeFile(index)}
                                                    className="ml-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
                                                >
                                                    <X className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="bg-gray-50/50 rounded-b-lg border-t border-gray-100 flex justify-between items-center pt-6">
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
                                className="px-6 py-2.5 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-medium transition-all duration-200"
                            >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Clear All
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading || !prompt.trim() || files.length === 0}
                                className="px-8 py-2.5 bg-gradient-to-r from-[#007f60] to-[#006b52] hover:from-[#006b52] hover:to-[#005944] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    backgroundColor:
                                        isLoading || !prompt.trim() || files.length === 0
                                            ? undefined
                                            : '#007f60',
                                }}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Creating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Create Diagram
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default NewDiagram;

import { useCallback, useEffect, useRef, useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import BpmnModelerComponent from './BpmnModeler';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';

import DiagramServices from '@/services/DiagramServices';

const Editor = () => {
    const { diagram, setDiagram, setIsLoading, setError } = useDiagramEditorContext();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const modelerRef = useRef<any>(null);

    const handleSaveDiagram = useCallback(async () => {
        if (!modelerRef.current || !diagram.diagram_id) {
            console.error('Cannot save: No modeler instance or diagram ID');
            setError('Cannot save diagram: Invalid state');
            return;
        }

        setIsSaving(true);
        setError(null);

        try {
            // Get the current XML from the modeler
            const { xml } = await modelerRef.current.saveXML({ format: true });

            // Update the diagram via API
            const updatedDiagram = await DiagramServices.updateDiagram(diagram.diagram_id, xml);

            // Update the local state with the saved diagram
            setDiagram({
                ...diagram,
                diagram_data: xml,
            });

            // Show success feedback
            alert('Diagram saved successfully!');
            console.log('Diagram saved successfully');
        } catch (error: any) {
            console.error('Failed to save diagram:', error);
            const errorMessage = error.message || 'Failed to save diagram. Please try again.';
            setError(errorMessage);
            alert(`Save failed: ${errorMessage}`);
        } finally {
            setIsSaving(false);
        }
    }, [diagram, setDiagram, setError]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                handleSaveDiagram();
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleSaveDiagram]);

    const handleOnExportDiagram = (xml: string) => {
        // Create and download XML file
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'banking-process.bpmn';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleZoomIn = () => {
        if (modelerRef.current) {
            const canvas = modelerRef.current.get('canvas');
            canvas.zoom(canvas.zoom() * 1.2);
        }
    };

    const handleZoomOut = () => {
        if (modelerRef.current) {
            const canvas = modelerRef.current.get('canvas');
            canvas.zoom(canvas.zoom() * 0.8);
        }
    };

    const handleFitToScreen = () => {
        if (modelerRef.current) {
            const canvas = modelerRef.current.get('canvas');
            canvas.zoom('fit-viewport');
        }
    };

    const toggleFullScreen = () => {
        const element = document.querySelector('.editor-container') || document.documentElement;

        if (!document.fullscreenElement) {
            element.requestFullscreen?.() ||
                (element as any).webkitRequestFullscreen?.() ||
                (element as any).msRequestFullscreen?.();
            setIsFullScreen(true);
        } else {
            document.exitFullscreen?.() ||
                (document as any).webkitExitFullscreen?.() ||
                (document as any).msExitFullscreen?.();
            setIsFullScreen(false);
        }
    };

    return (
        <Card className="editor-container h-full flex-1 relative overflow-hidden bg-white dark:bg-slate-900/50 rounded-md">
            {/* Canvas Header */}
            <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-10">
                <div className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-800">
                            {diagram.diagram_name || 'Untitled Process'}
                        </span>
                        <Badge
                            variant="outline"
                            className="text-xs border-[#007f60]/30 text-[#007f60]"
                        >
                            {diagram.diagram_id
                                ? `ID: ${diagram.diagram_id.slice(0, 8)}...`
                                : 'Draft'}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-px h-6 bg-gray-300 mx-2"></div>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-3 text-[#007f60] hover:bg-[#007f60]/10 hover:text-[#007f60]"
                            title="Zoom In"
                            onClick={handleZoomIn}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-3 text-[#007f60] hover:bg-[#007f60]/10 hover:text-[#007f60]"
                            title="Zoom Out"
                            onClick={handleZoomOut}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                                />
                            </svg>
                        </Button>

                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-3 text-[#007f60] hover:bg-[#007f60]/10 hover:text-[#007f60]"
                            title="Toggle Full Screen"
                            onClick={toggleFullScreen}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isFullScreen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9V4.5M15 9h4.5M15 9l5.25-5.25M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 15v4.5M15 15h4.5m0 0l5.25 5.25"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                    />
                                )}
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            {/* BPMN Modeler */}
            <div className="sticky bottom-0 h-full pt-10">
                <BpmnModelerComponent onExport={handleOnExportDiagram} ref={modelerRef} />
            </div>
        </Card>
    );
};

export default Editor;

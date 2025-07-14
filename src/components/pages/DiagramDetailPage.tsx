import { useEffect, useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import ChatBot from '../ui/ChatBot';
import Editor from '../ui/Editor';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';

import DiagramServices from '@/services/DiagramServices';

import { useParams } from 'react-router-dom';

const DiagramDetailPage = () => {
    const { id: diagramId } = useParams<{ id: string }>();
    const { diagram, setDiagram, isLoading, setIsLoading, error, setError } =
        useDiagramEditorContext();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [processMetrics, setProcessMetrics] = useState({
        efficiency: 85,
        riskScore: 'Medium',
        complianceStatus: 'Compliant',
        automationPotential: 'High',
    });

    // Fetch diagram data when component mounts or diagramId changes
    useEffect(() => {
        const fetchDiagram = async () => {
            if (!diagramId) {
                setError('No diagram ID provided');
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const diagramData = await DiagramServices.getDiagramById(diagramId);
                setDiagram(diagramData);
            } catch (err) {
                console.error('Failed to fetch diagram:', err);
                setError('Failed to load diagram. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDiagram();
    }, [diagramId, setDiagram, setIsLoading, setError]);

    // Show loading state
    if (isLoading) {
        return (
            <div className="h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading diagram...</p>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="text-center max-w-md">
                    <div className="text-red-500 text-6xl mb-4">⚠</div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Error Loading Diagram
                    </h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Button onClick={() => window.location.reload()}>Try Again</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
            {/* Chat Bot Component */}
            <ChatBot />

            {/* Main Content */}
            <div className="h-full p-6">
                {/* Right Sidebar - Resizable */}
                <ResizablePanelGroup direction="horizontal" className="h-full">
                    <ResizablePanel defaultSize={70} minSize={50}>
                        <Editor />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="mx-2" />
                    <ResizablePanel
                        defaultSize={30}
                        minSize={25}
                        maxSize={40}
                        className="flex flex-col gap-4 overflow-y-auto"
                    >
                        {/* Diagram Info */}
                        <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-sm">Diagram Info</h3>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                        Name
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        {diagram.diagram_name || 'Untitled'}
                                    </p>
                                </div>
                                {diagram.diagram_description && (
                                    <div>
                                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                            Description
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            {diagram.diagram_description}
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                        ID
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                                        {diagram.diagram_id || 'Draft'}
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* AI Analysis Panel */}
                        <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-purple-200/50 dark:border-purple-700/50">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-sm">AI Process Analysis</h3>
                            </div>
                            <div className="space-y-2">
                                <Button
                                    disabled={isAnalyzing}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm"
                                    size="sm"
                                >
                                    {isAnalyzing ? (
                                        <>
                                            <svg
                                                className="animate-spin w-3 h-3 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                className="w-3 h-3 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                            Analyze Process
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Card>

                        {/* Process Metrics */}
                        <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
                            <h3 className="font-semibold text-sm mb-3">Process Metrics</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                        Efficiency
                                    </span>
                                    <Badge variant="default" className="text-xs">
                                        {processMetrics.efficiency}%
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                        Risk Level
                                    </span>
                                    <Badge
                                        variant={
                                            processMetrics.riskScore === 'Low'
                                                ? 'default'
                                                : 'secondary'
                                        }
                                        className="text-xs"
                                    >
                                        {processMetrics.riskScore}
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                        Compliance
                                    </span>
                                    <Badge
                                        variant="default"
                                        className="text-xs bg-emerald-100 text-emerald-700"
                                    >
                                        {processMetrics.complianceStatus}
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                        Automation Potential
                                    </span>
                                    <Badge variant="secondary" className="text-xs">
                                        {processMetrics.automationPotential}
                                    </Badge>
                                </div>
                            </div>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
                            <h3 className="font-semibold text-sm mb-3">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs p-2 h-auto flex-col gap-1"
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Validate
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs p-2 h-auto flex-col gap-1"
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
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                    Optimize
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs p-2 h-auto flex-col gap-1"
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
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                    Report
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs p-2 h-auto flex-col gap-1"
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
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                    Share
                                </Button>
                            </div>
                        </Card>

                        {/* File Attachments - Show only if files exist */}
                        {'files' in diagram && diagram.files && diagram.files.length > 0 && (
                            <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-700/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-sm">Attached Files</h3>
                                </div>
                                <div className="space-y-2">
                                    {diagram.files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-2 bg-white/50 dark:bg-slate-800/50 rounded border"
                                        >
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    className="w-4 h-4 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                <div>
                                                    <p className="text-xs font-medium">
                                                        {file.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {file.type}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2"
                                                onClick={() => window.open(file.url, '_blank')}
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Banking Compliance */}
                        <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-emerald-200/50 dark:border-emerald-700/50">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-sm">Banking Compliance</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        KYC Compliance
                                    </span>
                                    <Badge
                                        variant="default"
                                        className="bg-emerald-100 text-emerald-700"
                                    >
                                        ✓
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        AML Checks
                                    </span>
                                    <Badge
                                        variant="default"
                                        className="bg-emerald-100 text-emerald-700"
                                    >
                                        ✓
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Risk Assessment
                                    </span>
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-100 text-yellow-700"
                                    >
                                        ⚠
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Data Privacy
                                    </span>
                                    <Badge
                                        variant="default"
                                        className="bg-emerald-100 text-emerald-700"
                                    >
                                        ✓
                                    </Badge>
                                </div>
                            </div>
                        </Card>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
};

export default DiagramDetailPage;

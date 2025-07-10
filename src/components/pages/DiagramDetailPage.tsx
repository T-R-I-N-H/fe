import { useState } from 'react';

import BpmnModelerComponent from '../ui/BpmnModeler';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const DiagramDetailPage = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [processMetrics, setProcessMetrics] = useState({
        efficiency: 85,
        riskScore: 'Medium',
        complianceStatus: 'Compliant',
        automationPotential: 'High',
    });

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

    const handleSave = () => {
        console.log('Saving banking process...');
    };

    const handleAIAnalysis = async () => {
        setIsAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
            setIsAnalyzing(false);
            alert('AI Analysis completed! Check the insights panel for recommendations.');
        }, 3000);
    };

    const handleComplianceCheck = () => {
        alert('Running compliance validation against banking regulations...');
    };

    const handleRiskAssessment = () => {
        alert('Performing risk assessment on process flow...');
    };

    const handleOptimize = () => {
        alert('AI optimization suggestions will be applied to the process...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
            {/* Main Content */}
            <div className=" mx-auto p-6 h-[calc(100vh-80px)] flex gap-6">
                {/* Left Sidebar - Chat Box */}
                <div className="w-96 flex flex-col gap-4">
                    {/* AI Chat Panel */}
                    <Card className="flex-1 p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-700/50 flex flex-col">
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
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-sm">AI Banking Assistant</h3>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto space-y-3 mb-4 min-h-0">
                            <div className="flex items-start gap-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        Hello! I'm your AI banking assistant. I can help you
                                        optimize your processes, ensure compliance, and provide
                                        insights.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 justify-end">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-white">
                                        Can you analyze this customer onboarding process?
                                    </p>
                                </div>
                                <div className="w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        I've analyzed your customer onboarding process. I found 3
                                        optimization opportunities and 1 compliance recommendation.
                                        Would you like me to show the details?
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="flex gap-2">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Ask about your banking process..."
                                    className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3"
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
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Main Canvas Area */}
                <div className="flex-1">
                    <Card className="h-full relative overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                        {/* Canvas Header */}
                        <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 z-10">
                            <div className="flex items-center justify-between px-6 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Customer Onboarding Process
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                        v2.1
                                    </Badge>
                                    <Badge
                                        variant="default"
                                        className="text-xs bg-blue-100 text-blue-700"
                                    >
                                        Banking
                                    </Badge>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 px-3"
                                        title="Zoom In"
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
                                        className="h-8 px-3"
                                        title="Zoom Out"
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
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 px-3"
                                        title="Fit to Screen"
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
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                            />
                                        </svg>
                                    </Button>
                                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 px-3"
                                        title="Process Simulation"
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
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* BPMN Modeler */}
                        <div className="h-full pt-16 pb-10">
                            <BpmnModelerComponent onExport={handleOnExportDiagram} />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50">
                            <div className="flex items-center justify-between px-6 py-2 text-xs text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        Process Ready
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        AI Analysis Active
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                        Compliance: Basel III
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>Zoom: 100%</span>
                                    <span>Elements: 12</span>
                                    <span>Efficiency: {processMetrics.efficiency}%</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Sidebar - Function Buttons & Controls */}
                <div className="w-80 flex flex-col gap-4">
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
                                onClick={handleAIAnalysis}
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
                            <Button
                                onClick={handleOptimize}
                                variant="outline"
                                className="w-full text-sm"
                                size="sm"
                            >
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
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                                Optimize Process
                            </Button>
                        </div>
                    </Card>

                    {/* Banking Compliance Panel */}
                    <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-emerald-200/50 dark:border-emerald-700/50">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
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
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-sm">Banking Compliance</h3>
                        </div>
                        <div className="space-y-2">
                            <Button
                                onClick={handleComplianceCheck}
                                variant="outline"
                                className="w-full text-sm"
                                size="sm"
                            >
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
                                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    />
                                </svg>
                                Compliance Check
                            </Button>
                            <Button
                                onClick={handleRiskAssessment}
                                variant="outline"
                                className="w-full text-sm"
                                size="sm"
                            >
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
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                Risk Assessment
                            </Button>
                        </div>
                    </Card>

                    {/* Process Metrics */}
                    <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
                        <h3 className="font-semibold text-sm mb-3">Process Metrics</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-slate-600 dark:text-slate-400">
                                    Efficiency Score
                                </span>
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                                            style={{ width: `${processMetrics.efficiency}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-medium">
                                        {processMetrics.efficiency}%
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-slate-600 dark:text-slate-400">
                                    Risk Level
                                </span>
                                <Badge
                                    variant={
                                        processMetrics.riskScore === 'Low' ? 'default' : 'secondary'
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
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                    />
                                </svg>
                                User Roles
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
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                Security
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
                                Analytics
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
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Help
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DiagramDetailPage;

import { useEffect, useRef, useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import Editor from '../ui/Editor';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';

import ChatServices from '@/services/ChatServices';
import DiagramServices from '@/services/DiagramServices';

import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

interface Message {
    id: string;
    type: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const DiagramDetailPage = () => {
    const { id: diagramId } = useParams<{ id: string }>();
    const { diagram, setDiagram, isLoading, setIsLoading, error, setError } =
        useDiagramEditorContext();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeTab, setActiveTab] = useState<'optimize' | 'benchmark' | 'chat'>('optimize');
    const [optimizationData, setOptimizationData] = useState<any>(null);
    const [benchmarkData, setBenchmarkData] = useState<any>(null);
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [isBenchmarking, setIsBenchmarking] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const [isChatHistoryLoading, setIsChatHistoryLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
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

    // Fetch chat history when diagram is loaded
    useEffect(() => {
        const fetchChatHistory = async () => {
            if (!diagram?.diagram_id) return;

            setIsChatHistoryLoading(true);
            try {
                const conversation = await ChatServices.getConversation(diagram.diagram_id);

                if (conversation?.messages && conversation.messages.length > 0) {
                    // Convert API messages to UI message format
                    const formattedMessages: Message[] = conversation.messages.map(
                        (msg: any, index: number) => ({
                            id: `${index}-${msg.timestamp || Date.now()}`,
                            type: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.message,
                            timestamp: new Date(msg.timestamp ? msg.timestamp * 1000 : Date.now()),
                        }),
                    );

                    setMessages(formattedMessages);
                } else {
                    // Set default welcome message if no chat history
                    setMessages([
                        {
                            id: '1',
                            type: 'assistant',
                            content:
                                "Hello! I'm your AI banking assistant. I can help you optimize your processes, ensure compliance, and provide insights.",
                            timestamp: new Date(),
                        },
                    ]);
                }
            } catch (error) {
                console.error('Failed to fetch chat history:', error);
                // Set default welcome message on error
                setMessages([
                    {
                        id: '1',
                        type: 'assistant',
                        content:
                            "Hello! I'm your AI banking assistant. I can help you optimize your processes, ensure compliance, and provide insights.",
                        timestamp: new Date(),
                    },
                ]);
            } finally {
                setIsChatHistoryLoading(false);
            }
        };

        fetchChatHistory();
    }, [diagram?.diagram_id]);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Scroll to bottom when chat tab becomes active or chat history finishes loading
    useEffect(() => {
        if (activeTab === 'chat' && !isChatHistoryLoading) {
            // Use a small delay to ensure the DOM has rendered
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [activeTab, isChatHistoryLoading]);

    // Scroll to bottom immediately when chat history finishes loading
    useEffect(() => {
        if (!isChatHistoryLoading && messages.length > 0 && activeTab === 'chat') {
            // Use a small delay to ensure the messages have rendered
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    }, [isChatHistoryLoading, messages.length, activeTab]);

    // Handle optimization
    const handleOptimize = async () => {
        if (!diagram?.diagram_id) return;

        setIsOptimizing(true);
        try {
            const response = await DiagramServices.optimizeDiagram(diagram.diagram_id);
            setOptimizationData(response.data);
            // Update the diagram with optimized data if available
            if (response.data?.data) {
                setDiagram({
                    ...diagram,
                    diagram_data: response.data.data,
                });
            }
        } catch (error) {
            console.error('Failed to optimize diagram:', error);
        } finally {
            setIsOptimizing(false);
        }
    };

    // Handle benchmark
    const handleBenchmark = async () => {
        if (!diagram?.diagram_id) return;

        setIsBenchmarking(true);
        try {
            const response = await DiagramServices.benchmarkDiagram(diagram.diagram_id);
            setBenchmarkData(response.data);
        } catch (error) {
            console.error('Failed to benchmark diagram:', error);
        } finally {
            setIsBenchmarking(false);
        }
    };

    // Handle chat message sending
    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        if (!diagram?.diagram_id) {
            const errorMessage: Message = {
                id: Date.now().toString(),
                type: 'assistant',
                content: 'Please save your diagram first before using the chat assistant.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
            return;
        }

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsChatLoading(true);

        try {
            const response = await ChatServices.sendMessage(currentInput, diagram.diagram_id);

            if (response.action === 'modify_diagram') {
                setDiagram({
                    ...diagram,
                    diagram_data: response.data,
                });

                const assistantMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    type: 'assistant',
                    content:
                        response.answer || 'I have updated your diagram based on your request.',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage]);
            } else if (response.action === 'answer_question') {
                const assistantMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    type: 'assistant',
                    content: response.answer,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsChatLoading(false);
        }
    };

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
                        className="flex flex-col gap-4 overflow-hidden"
                    >
                        {/* Tab Navigation */}
                        <div className="flex bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                            <button
                                onClick={() => setActiveTab('optimize')}
                                className={`flex-1 px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${
                                    activeTab === 'optimize'
                                        ? 'bg-[#007f60] text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-[#007f60]'
                                }`}
                            >
                                Optimize
                            </button>
                            <button
                                onClick={() => setActiveTab('benchmark')}
                                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                                    activeTab === 'benchmark'
                                        ? 'bg-[#007f60] text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-[#007f60]'
                                }`}
                            >
                                Benchmark
                            </button>
                            <button
                                onClick={() => setActiveTab('chat')}
                                className={`flex-1 px-3 py-2 text-sm font-medium rounded-r-lg transition-colors ${
                                    activeTab === 'chat'
                                        ? 'bg-[#007f60] text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-[#007f60]'
                                }`}
                            >
                                Chat
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="flex-1 overflow-y-auto px-5">
                            {activeTab === 'optimize' && (
                                <div className="space-y-4">
                                    {/* Optimize Action */}
                                    <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-[#007f60]/30 dark:border-[#007f60]/50">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center">
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
                                            <h3 className="font-semibold text-sm">
                                                Process Optimization
                                            </h3>
                                        </div>
                                        <Button
                                            disabled={isOptimizing}
                                            onClick={handleOptimize}
                                            className="w-full bg-gradient-to-r from-[#007f60] to-[#005a47] hover:from-[#006b54] hover:to-[#004d3d] text-white text-sm"
                                            size="sm"
                                        >
                                            {isOptimizing ? (
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
                                                    Optimizing...
                                                </>
                                            ) : (
                                                'Optimize Process'
                                            )}
                                        </Button>
                                    </Card>

                                    {/* Optimization Results */}
                                    {optimizationData && (
                                        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                                            {/* Summary Card */}
                                            <Card className="p-4 bg-gradient-to-br from-[#007f60]/10 to-[#005a47]/10 dark:from-[#007f60]/20 dark:to-[#005a47]/20 border-[#007f60]/30 dark:border-[#007f60]/50 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center">
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
                                                    <h3 className="font-semibold text-sm text-[#007f60] dark:text-[#00a077]">
                                                        Optimization Summary
                                                    </h3>
                                                </div>
                                                <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-3">
                                                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                                        {optimizationData.answer}
                                                    </p>
                                                </div>
                                            </Card>

                                            {/* Improvements Cards */}
                                            {optimizationData.optimization_detail && (
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-5 h-5 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center">
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
                                                        <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                                                            Key Improvements
                                                        </h4>
                                                    </div>

                                                    {Object.entries(
                                                        optimizationData.optimization_detail,
                                                    ).map(([key, value], index) => {
                                                        const colors = [
                                                            'from-purple-50 to-pink-50 border-purple-200/50 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-700/50',
                                                            'from-blue-50 to-cyan-50 border-blue-200/50 dark:from-blue-900/20 dark:to-cyan-900/20 dark:border-blue-700/50',
                                                            'from-orange-50 to-amber-50 border-orange-200/50 dark:from-orange-900/20 dark:to-amber-900/20 dark:border-orange-700/50',
                                                            'from-teal-50 to-green-50 border-teal-200/50 dark:from-teal-900/20 dark:to-green-900/20 dark:border-teal-700/50',
                                                        ];
                                                        const colorClass =
                                                            colors[index % colors.length];

                                                        return (
                                                            <Card
                                                                key={key}
                                                                className={`p-3 bg-gradient-to-br ${colorClass} shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]`}
                                                            >
                                                                <div className="flex items-start gap-2">
                                                                    <div className="w-6 h-6 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                        <span className="text-xs font-bold text-white">
                                                                            {index + 1}
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h5 className="font-medium text-xs text-slate-800 dark:text-slate-200 mb-1 capitalize">
                                                                            {key
                                                                                .replace(
                                                                                    /improvement_|_/g,
                                                                                    ' ',
                                                                                )
                                                                                .trim()}
                                                                        </h5>
                                                                        <div className="bg-white/60 dark:bg-slate-800/60 rounded p-2">
                                                                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                                                                {value as string}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* Success Badge */}
                                            <div className="flex justify-center pt-2">
                                                <Badge className="bg-gradient-to-r from-[#007f60] to-[#005a47] text-white px-3 py-1 animate-pulse">
                                                    <svg
                                                        className="w-3 h-3 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    Process Optimized Successfully
                                                </Badge>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'benchmark' && (
                                <div className="space-y-4">
                                    {/* Benchmark Action */}
                                    <Card className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-[#007f60]/30 dark:border-[#007f60]/50">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center">
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
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-sm">
                                                Process Benchmark
                                            </h3>
                                        </div>
                                        <Button
                                            disabled={isBenchmarking}
                                            onClick={handleBenchmark}
                                            className="w-full bg-gradient-to-r from-[#007f60] to-[#005a47] hover:from-[#006b54] hover:to-[#004d3d] text-white text-sm"
                                            size="sm"
                                        >
                                            {isBenchmarking ? (
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
                                                    Benchmarking...
                                                </>
                                            ) : (
                                                'Run Benchmark'
                                            )}
                                        </Button>
                                    </Card>

                                    {/* Benchmark Results */}
                                    {benchmarkData && (
                                        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                                            {/* Analysis Summary */}
                                            {benchmarkData.answer && (
                                                <Card className="p-4 bg-gradient-to-br from-[#007f60]/10 to-[#005a47]/10 dark:from-[#007f60]/20 dark:to-[#005a47]/20 border-[#007f60]/30 dark:border-[#007f60]/50 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-6 h-6 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center">
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
                                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <h3 className="font-semibold text-sm text-[#007f60] dark:text-[#00a077]">
                                                            Benchmark Analysis
                                                        </h3>
                                                    </div>
                                                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-3">
                                                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                                            {benchmarkData.answer}
                                                        </p>
                                                    </div>
                                                </Card>
                                            )}

                                            {/* Process Metrics Dashboard */}
                                            <Card className="p-4 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-slate-500 to-gray-500 rounded-full flex items-center justify-center">
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
                                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                                                        Performance Metrics
                                                    </h4>
                                                </div>

                                                <div className="grid grid-cols-1 gap-3">
                                                    {/* Efficiency Metric */}
                                                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-3 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-200">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                                                                Process Efficiency
                                                            </span>
                                                            <Badge
                                                                className={`text-xs ${
                                                                    processMetrics.efficiency >= 80
                                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                                                                        : processMetrics.efficiency >=
                                                                            60
                                                                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                                                                          : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                                                                }`}
                                                            >
                                                                {processMetrics.efficiency}%
                                                            </Badge>
                                                        </div>
                                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                            <div
                                                                className={`h-2 rounded-full ${
                                                                    processMetrics.efficiency >= 80
                                                                        ? 'bg-gradient-to-r from-green-400 to-green-500'
                                                                        : processMetrics.efficiency >=
                                                                            60
                                                                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                                                                          : 'bg-gradient-to-r from-red-400 to-red-500'
                                                                }`}
                                                                style={{
                                                                    width: `${processMetrics.efficiency}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    {/* Risk Level */}
                                                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-3 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-200">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                                                                Risk Level
                                                            </span>
                                                            <Badge
                                                                className={`text-xs ${
                                                                    processMetrics.riskScore ===
                                                                    'Low'
                                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                                                                        : processMetrics.riskScore ===
                                                                            'Medium'
                                                                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                                                                          : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                                                                }`}
                                                            >
                                                                {processMetrics.riskScore}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    {/* Automation Potential */}
                                                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-3 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-200">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                                                                Automation Potential
                                                            </span>
                                                            <Badge
                                                                className={`text-xs ${
                                                                    processMetrics.automationPotential ===
                                                                    'High'
                                                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                                                                        : processMetrics.automationPotential ===
                                                                            'Medium'
                                                                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                                                                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
                                                                }`}
                                                            >
                                                                {processMetrics.automationPotential}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>

                                            {/* Success Badge */}
                                            <div className="flex justify-center pt-2">
                                                <Badge className="bg-gradient-to-r from-[#007f60] to-[#005a47] text-white px-3 py-1 animate-pulse">
                                                    <svg
                                                        className="w-3 h-3 mr-1"
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
                                                    Benchmark Analysis Complete
                                                </Badge>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'chat' && (
                                <div className="h-full flex flex-col relative">
                                    {/* Chat Header */}
                                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#007f60]/10 to-[#005a47]/10 dark:from-[#007f60]/20 dark:to-[#005a47]/20 rounded-t-lg border-b border-[#007f60]/20 dark:border-[#007f60]/30">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#007f60] to-[#005a47] rounded-full flex items-center justify-center shadow-lg">
                                            <svg
                                                className="w-4 h-4 text-white"
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
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm text-[#007f60] dark:text-[#00a077]">
                                                AI Banking Assistant
                                            </h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Ask about process optimization, compliance, or
                                                general banking queries
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                                Online
                                            </span>
                                        </div>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className="flex-1 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50">
                                        <div className="h-full overflow-y-auto p-4 space-y-4">
                                            {isChatHistoryLoading ? (
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="text-center">
                                                        <div className="w-8 h-8 border-2 border-[#007f60] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                                            Loading chat history...
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    {messages.map((message, index) => (
                                                        <div
                                                            key={message.id}
                                                            className={`flex items-start gap-3 ${
                                                                message.type === 'user'
                                                                    ? 'flex-row-reverse'
                                                                    : 'flex-row'
                                                            } animate-in fade-in-0 slide-in-from-bottom-2 duration-300`}
                                                            style={{
                                                                animationDelay: `${index * 50}ms`,
                                                            }}
                                                        >
                                                            {/* Avatar */}
                                                            <div
                                                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                                                                    message.type === 'user'
                                                                        ? 'bg-gradient-to-br from-[#007f60] to-[#005a47]'
                                                                        : 'bg-gradient-to-br from-slate-400 to-slate-500'
                                                                }`}
                                                            >
                                                                {message.type === 'user' ? (
                                                                    <svg
                                                                        className="w-4 h-4 text-white"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                        />
                                                                    </svg>
                                                                ) : (
                                                                    <svg
                                                                        className="w-4 h-4 text-white"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                )}
                                                            </div>

                                                            {/* Message Bubble */}
                                                            <div
                                                                className={`max-w-[75%] group ${
                                                                    message.type === 'user'
                                                                        ? 'items-end'
                                                                        : 'items-start'
                                                                }`}
                                                            >
                                                                <div
                                                                    className={`relative px-4 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 ${
                                                                        message.type === 'user'
                                                                            ? 'bg-gradient-to-br from-[#007f60] to-[#005a47] text-white rounded-br-md'
                                                                            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 rounded-bl-md'
                                                                    }`}
                                                                >
                                                                    <div
                                                                        className={`prose prose-sm max-w-none ${
                                                                            message.type === 'user'
                                                                                ? 'prose-invert text-sm'
                                                                                : 'text-sm'
                                                                        }`}
                                                                    >
                                                                        <ReactMarkdown
                                                                            components={{
                                                                                p: ({
                                                                                    children,
                                                                                }) => (
                                                                                    <p className="mb-2 last:mb-0">
                                                                                        {children}
                                                                                    </p>
                                                                                ),
                                                                                ul: ({
                                                                                    children,
                                                                                }) => (
                                                                                    <ul className="list-disc pl-4 mb-2 last:mb-0">
                                                                                        {children}
                                                                                    </ul>
                                                                                ),
                                                                                ol: ({
                                                                                    children,
                                                                                }) => (
                                                                                    <ol className="list-decimal pl-4 mb-2 last:mb-0">
                                                                                        {children}
                                                                                    </ol>
                                                                                ),
                                                                                li: ({
                                                                                    children,
                                                                                }) => (
                                                                                    <li className="mb-1">
                                                                                        {children}
                                                                                    </li>
                                                                                ),
                                                                                code: ({
                                                                                    children,
                                                                                }) => (
                                                                                    <code
                                                                                        className={`px-1.5 py-0.5 rounded text-xs font-mono ${
                                                                                            message.type ===
                                                                                            'user'
                                                                                                ? 'bg-white/20 text-white'
                                                                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                                                                                        }`}
                                                                                    >
                                                                                        {children}
                                                                                    </code>
                                                                                ),
                                                                            }}
                                                                        >
                                                                            {message.content}
                                                                        </ReactMarkdown>
                                                                    </div>

                                                                    {/* Message tail */}
                                                                    <div
                                                                        className={`absolute top-4 w-0 h-0 ${
                                                                            message.type === 'user'
                                                                                ? 'right-[-6px] border-l-[6px] border-l-[#007f60] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
                                                                                : 'left-[-6px] border-r-[6px] border-r-white dark:border-r-slate-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
                                                                        }`}
                                                                    />
                                                                </div>

                                                                {/* Timestamp */}
                                                                <div
                                                                    className={`flex items-center gap-1 mt-1 px-1 ${
                                                                        message.type === 'user'
                                                                            ? 'justify-end'
                                                                            : 'justify-start'
                                                                    }`}
                                                                >
                                                                    <span className="text-xs text-slate-400 dark:text-slate-500">
                                                                        {message.timestamp.toLocaleTimeString(
                                                                            [],
                                                                            {
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                            },
                                                                        )}
                                                                    </span>
                                                                    {message.type === 'user' && (
                                                                        <svg
                                                                            className="w-3 h-3 text-[#007f60]"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* Typing Indicator */}
                                                    {isChatLoading && (
                                                        <div className="flex items-start gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center shadow-md">
                                                                <svg
                                                                    className="w-4 h-4 text-white"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                                                                <div className="flex items-center gap-1">
                                                                    <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">
                                                                        AI is typing
                                                                    </span>
                                                                    <div className="flex space-x-1">
                                                                        <div className="w-2 h-2 bg-[#007f60] rounded-full animate-bounce"></div>
                                                                        <div className="w-2 h-2 bg-[#007f60] rounded-full animate-bounce [animation-delay:0.1s]"></div>
                                                                        <div className="w-2 h-2 bg-[#007f60] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div ref={messagesEndRef} />
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Chat Input */}
                                    <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50 rounded-b-lg">
                                        <div className="flex items-end gap-3">
                                            <div className="flex-1">
                                                <div className="relative">
                                                    <Input
                                                        type="text"
                                                        value={inputValue}
                                                        onChange={(e) =>
                                                            setInputValue(e.target.value)
                                                        }
                                                        onKeyPress={(e) => {
                                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                                e.preventDefault();
                                                                handleSendMessage();
                                                            }
                                                        }}
                                                        placeholder="Type your message... (Press Enter to send)"
                                                        className="pr-12 text-sm resize-none border-slate-300 dark:border-slate-600 focus:border-[#007f60] dark:focus:border-[#007f60] focus:ring-[#007f60]/20 rounded-xl"
                                                        disabled={isChatLoading}
                                                    />

                                                    {/* Quick actions */}
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                                                        {inputValue.trim() && !isChatLoading && (
                                                            <button
                                                                onClick={() => setInputValue('')}
                                                                className="w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                                            >
                                                                <svg
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Suggested prompts for empty state */}
                                                {messages.length === 1 && !inputValue && (
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {[
                                                            'Optimize this process',
                                                            'Check compliance',
                                                            'Analyze efficiency',
                                                            'Suggest improvements',
                                                        ].map((prompt) => (
                                                            <button
                                                                key={prompt}
                                                                onClick={() =>
                                                                    setInputValue(prompt)
                                                                }
                                                                className="px-3 py-1.5 text-xs bg-[#007f60]/10 hover:bg-[#007f60]/20 text-[#007f60] dark:text-[#00a077] rounded-full transition-colors border border-[#007f60]/20"
                                                            >
                                                                {prompt}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <Button
                                                onClick={handleSendMessage}
                                                disabled={isChatLoading || !inputValue.trim()}
                                                size="sm"
                                                className="w-10 h-10 p-0 bg-gradient-to-br from-[#007f60] to-[#005a47] hover:from-[#006b54] hover:to-[#004d3d] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isChatLoading ? (
                                                    <svg
                                                        className="w-4 h-4 animate-spin"
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
                                                ) : (
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
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
};

export default DiagramDetailPage;

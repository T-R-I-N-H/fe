import { useState } from 'react';

import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';

import ChatServices from '@/services/ChatServices';

import ReactMarkdown from 'react-markdown';

interface Message {
    id: string;
    type: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const ChatBot = () => {
    const { diagram, setDiagram } = useDiagramEditorContext();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [hasNewMessages, setHasNewMessages] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'assistant',
            content:
                "Hello! I'm your AI banking assistant. I can help you optimize your processes, ensure compliance, and provide insights.",
            timestamp: new Date(),
        },
    ]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        if (!diagram.diagram_id) {
            // Add error message for missing diagram ID
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
        setIsLoading(true);

        try {
            const response = await ChatServices.sendMessage(currentInput, diagram.diagram_id);
            console.log('response: ', response);

            if (response.action === 'modify_diagram') {
                // Update diagram state with new diagram data
                setDiagram({
                    ...diagram,
                    diagram_data: response.data,
                });

                // Add assistant message indicating diagram was modified
                const assistantMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    type: 'assistant',
                    content:
                        response.answer || 'I have updated your diagram based on your request.',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage]);
            } else if (response.action === 'answer_question') {
                // Just add the assistant's answer as a new message
                const assistantMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    type: 'assistant',
                    content: response.answer,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage]);
            }

            setHasNewMessages(true);
        } catch (error) {
            console.error('Error sending message:', error);

            // Add error message
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content:
                    'Sorry, I encountered an error while processing your request. Please try again.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setHasNewMessages(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={handleToggleChat}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 relative ${hasNewMessages && !isOpen ? 'animate-pulse-notification' : ''}`}
                >
                    {!isOpen ? (
                        <svg
                            className="w-6 h-6 text-white"
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
                    ) : (
                        <svg
                            className="w-6 h-6 text-white"
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
                    )}

                    {/* Notification badge */}
                    {hasNewMessages && !isOpen && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-xs text-white font-semibold">3</span>
                        </div>
                    )}
                </Button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[600px] h-[600px] animate-in">
                    <Card className="h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-blue-200/50 dark:border-blue-700/50 shadow-2xl flex flex-col gap-0 py-0">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-200/50 dark:border-slate-700/50">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
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
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">AI Banking Assistant</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                    Smart
                                </Badge>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsOpen(false)}
                                    className="h-6 w-6 p-0"
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
                                            d="M20 12H4"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex items-start gap-2 ${
                                        message.type === 'user' ? 'justify-end' : ''
                                    }`}
                                >
                                    {message.type === 'assistant' && (
                                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                                    )}

                                    <div
                                        className={`rounded-lg p-3 max-w-[80%] ${
                                            message.type === 'user'
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                                                : 'bg-blue-50 dark:bg-blue-900/30'
                                        }`}
                                    >
                                        <p
                                            className={`text-sm prose ${
                                                message.type === 'user'
                                                    ? 'text-white'
                                                    : 'text-slate-700 dark:text-slate-300'
                                            }`}
                                        >
                                            <ReactMarkdown>{message.content}</ReactMarkdown>
                                        </p>
                                        <p
                                            className={`text-xs mt-1 ${
                                                message.type === 'user'
                                                    ? 'text-blue-100'
                                                    : 'text-slate-500 dark:text-slate-400'
                                            }`}
                                        >
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>

                                    {message.type === 'user' && (
                                        <div className="w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                                    )}
                                </div>
                            ))}

                            {/* Loading indicator */}
                            {isLoading && (
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></div>
                                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <textarea
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask about your banking process..."
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[40px] max-h-[80px] disabled:opacity-50 disabled:cursor-not-allowed"
                                        rows={1}
                                    />
                                </div>
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 h-10"
                                >
                                    {isLoading ? (
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
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
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

                            {/* Quick Actions */}
                            <div className="flex gap-1 mt-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-6 px-2"
                                    onClick={() => setInputValue('Analyze this process')}
                                >
                                    Analyze
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-6 px-2"
                                    onClick={() => setInputValue('Check compliance')}
                                >
                                    Compliance
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-6 px-2"
                                    onClick={() => setInputValue('Optimize workflow')}
                                >
                                    Optimize
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};

export default ChatBot;

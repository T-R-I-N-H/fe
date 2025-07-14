import { useEffect, useRef, useState } from 'react';

import { useAppContext } from '../provider/AppProvider';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

import { ChartAreaIcon, LogOut, Settings, User } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const { logout } = useAppContext();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="min-h-screen overflow-hidden">
            <header className="border-b bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link
                                to="/diagrams"
                                className="flex flex-col gap-1 hover:opacity-80 transition-opacity"
                            >
                                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                    VPBank AI Agent Platform
                                </h1>
                                <Badge
                                    variant="secondary"
                                    className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 w-fit"
                                >
                                    Banking Process Optimizer
                                </Badge>
                            </Link>
                        </div>

                        <nav className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
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
                                Templates
                            </Button>

                            <Link to="new">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                                >
                                    <ChartAreaIcon className="w-4 h-4 mr-2" />
                                    New Diagram
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                                Save Process
                            </Button>

                            <Button
                                size="sm"
                                onClick={() =>
                                    console.log(
                                        'Export from header - this would trigger the modeler export',
                                    )
                                }
                                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
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
                                Export
                            </Button>

                            {/* User Menu */}
                            <div className="relative ml-3" ref={menuRef}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="h-9 w-9 rounded-full p-0"
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                                        <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                            VP
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50 py-1">
                                        <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                            <User className="w-4 h-4 mr-3" />
                                            Profile
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                            <Settings className="w-4 h-4 mr-3" />
                                            Settings
                                        </button>
                                        <hr className="my-1 border-slate-200 dark:border-slate-700" />
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                        >
                                            <LogOut className="w-4 h-4 mr-3" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;

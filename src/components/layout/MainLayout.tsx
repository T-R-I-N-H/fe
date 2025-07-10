import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm sticky top-0 z-20">
                <div className="mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div>
                                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                        VPBank AI Agent Platform
                                    </h1>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        Banking Process Optimizer
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-slate-600 dark:text-slate-400"
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
                                className=" text-white shadow-lg"
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
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;

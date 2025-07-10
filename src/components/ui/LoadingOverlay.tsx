import { useEffect, useState } from 'react';

import { useLoading } from '@/contexts/LoadingContext';

import { Activity } from 'lucide-react';

const LoadingOverlay = () => {
    const { isLoading } = useLoading();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setProgress(0);
            return;
        }

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 95) return prev;
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-primary animate-pulse" />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-foreground">Loading...</p>
                    <p className="text-xs text-muted-foreground">Please wait a moment</p>
                </div>

                {/* Progress bar */}
                <div className="w-48 bg-secondary rounded-full h-1">
                    <div
                        className="bg-primary h-1 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;

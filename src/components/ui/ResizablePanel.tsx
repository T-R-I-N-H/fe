import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ResizablePanelProps {
    children: React.ReactNode;
    defaultWidth?: number;
    minWidth?: number;
    maxWidth?: number;
    className?: string;
}

const ResizablePanel = ({
    children,
    defaultWidth = 320,
    minWidth = 280,
    maxWidth = 600,
    className = '',
}: ResizablePanelProps) => {
    const [width, setWidth] = useState(defaultWidth);
    const [isResizing, setIsResizing] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsResizing(true);
    }, []);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isResizing || !panelRef.current) return;

            const rect = panelRef.current.getBoundingClientRect();
            const newWidth = rect.right - e.clientX;

            if (newWidth >= minWidth && newWidth <= maxWidth) {
                setWidth(newWidth);
            }
        },
        [isResizing, minWidth, maxWidth],
    );

    const handleMouseUp = useCallback(() => {
        setIsResizing(false);
    }, []);

    // Add event listeners for mouse move and up
    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'ew-resize';
            document.body.style.userSelect = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };
    }, [isResizing, handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={panelRef}
            className={`relative ${className} ${isResizing ? 'select-none' : ''}`}
            style={{ width: `${width}px` }}
        >
            {/* Resize Handle */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize transition-all duration-200 group flex items-center justify-center ${
                    isResizing ? 'bg-blue-500/30' : 'bg-transparent hover:bg-blue-500/20'
                }`}
                onMouseDown={handleMouseDown}
            >
                <div
                    className={`w-1 h-8 rounded-full transition-all duration-200 flex items-center justify-center ${
                        isResizing
                            ? 'bg-blue-500 opacity-100'
                            : 'bg-slate-300 dark:bg-slate-600 opacity-0 group-hover:opacity-100'
                    }`}
                >
                    <div
                        className={`w-0.5 h-4 rounded-full transition-colors duration-200 ${
                            isResizing ? 'bg-blue-100' : 'bg-slate-400 dark:bg-slate-500'
                        }`}
                    ></div>
                </div>
            </div>

            {/* Content */}
            <div className="pl-3">{children}</div>

            {/* Resizing overlay with width indicator */}
            {isResizing && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm pointer-events-none" />
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium pointer-events-none">
                        Width: {width}px
                    </div>
                </>
            )}
        </div>
    );
};

export default ResizablePanel;

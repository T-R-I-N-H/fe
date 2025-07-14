import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import BpmnModelerComponent from './BpmnModeler';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';

const Editor = () => {
    const { diagram } = useDiagramEditorContext();
    console.log(diagram);

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

    return (
        <Card className="h-full flex-1 relative overflow-hidden bg-white/50 dark:bg-slate-900/50 ">
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
                            {diagram.diagram_name || 'Untitled Process'}
                        </span>
                        <Badge variant="outline" className="text-xs">
                            {diagram.diagram_id
                                ? `ID: ${diagram.diagram_id.slice(0, 8)}...`
                                : 'Draft'}
                        </Badge>
                        <Badge variant="default" className="text-xs bg-blue-100 text-blue-700">
                            Banking
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-3" title="Zoom In">
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
                        <Button variant="ghost" size="sm" className="h-8 px-3" title="Zoom Out">
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
            <div className="sticky bottom-0 h-full pt-10">
                <BpmnModelerComponent onExport={handleOnExportDiagram} />
            </div>

            {/* Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 border-t border-slate-200/50 dark:border-slate-700/50">
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
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Editor;

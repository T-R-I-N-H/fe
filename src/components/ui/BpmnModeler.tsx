import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { cleanBpmnXml, xml } from '../../constants';
import { useDiagramEditorContext } from '../provider/DiagramEditorProvider';
import { Button } from './button';

import DiagramServices from '@/services/DiagramServices';

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/diagram-js.css';
// @ts-ignore
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';

type Props = {
    onExport?: (xml: string) => void;
};

const BpmnModelerComponent = forwardRef<BpmnJS | null, Props>((props, ref) => {
    const { onExport } = props;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const modelerRef = useRef<BpmnJS | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const { diagram } = useDiagramEditorContext();

    useImperativeHandle(ref, () => modelerRef.current, []);

    useEffect(() => {
        // if (!containerRef.current) return;

        const modeler = new BpmnJS({
            container: containerRef.current,
        });

        modelerRef.current = modeler;

        const openDiagram = async (bpmnXML: string) => {
            try {
                await modeler.importXML(bpmnXML);

                const canvas = modeler.get('canvas');
                const overlays = modeler.get('overlays');

                canvas.zoom('fit-viewport');

                overlays.add('SCAN_OK', 'note', {
                    position: { bottom: 0, right: 0 },
                    html: `<div style="background: rgba(66, 180, 21, 0.7); color: white; padding: 4px; border-radius: 4px; font-size: 12px;">
                   Mixed up the labels?
                 </div>`,
                });

                canvas.addMarker('SCAN_OK', 'needs-discussion');
            } catch (err) {
                console.error('Could not import BPMN 2.0 diagram', err);
            }
        };

        openDiagram(cleanBpmnXml(diagram?.diagram_data));

        return () => {
            modeler.destroy();
        };
    }, [diagram]);

    const exportDiagram = async () => {
        if (!modelerRef.current) return;

        try {
            const { xml } = await modelerRef.current.saveXML({ format: true });
            onExport?.(xml);
        } catch (err) {
            console.error('Could not save BPMN 2.0 diagram', err);
        }
    };

    const handleSaveDiagram = async () => {
        if (!modelerRef.current || !diagram?.diagram_id) return;

        setIsSaving(true);
        try {
            const { xml } = await modelerRef.current.saveXML({ format: true });
            await DiagramServices.updateDiagram(diagram.diagram_id, xml);
        } catch (err) {
            console.error('Could not save BPMN 2.0 diagram', err);
        } finally {
            setIsSaving(false);
        }
    };

    const handleOnExportDiagram = (xml: string) => {
        // Create a download link for the XML
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${diagram?.diagram_name || 'diagram'}.bpmn`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="relative h-full w-full bpmn-container bg-white">
            <div ref={containerRef} className="h-full w-full" />
            {isSaving && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20">
                    <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#007f60]"></div>
                        <span className="text-sm font-medium text-gray-700">Saving diagram...</span>
                    </div>
                </div>
            )}
            {/* Floating toolbar */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
                <Button
                    variant="default"
                    size="sm"
                    className="h-8 px-4 bg-[#007f60] hover:bg-[#007f60]/90 text-white disabled:opacity-50"
                    title="Save Diagram"
                    onClick={handleSaveDiagram}
                    disabled={isSaving || !diagram?.diagram_id}
                >
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isSaving ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                        )}
                    </svg>
                    {isSaving ? 'Saving...' : 'Save'}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-4 border-[#007f60] text-[#007f60] hover:bg-[#007f60]/10"
                    title="Export Diagram"
                    onClick={() => {
                        if (modelerRef.current) {
                            modelerRef.current
                                .saveXML({ format: true })
                                .then(({ xml }: { xml: string }) => {
                                    handleOnExportDiagram(xml);
                                });
                        }
                    }}
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
    );
});

BpmnModelerComponent.displayName = 'BpmnModelerComponent';

export default BpmnModelerComponent;

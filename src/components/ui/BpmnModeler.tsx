import React, { useEffect, useRef, useState } from 'react';

import { xml } from '../../constants';

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/diagram-js.css';
// @ts-ignore
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';

type Props = {
    onExport?: (xml: string) => void;
};

const BpmnModelerComponent = (props: Props) => {
    const { onExport } = props;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const modelerRef = useRef<BpmnJS | null>(null);
    const [diagramXml, setDiagramXml] = useState<string>(xml);

    useEffect(() => {
        if (!containerRef.current) return;

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

        openDiagram(xml);

        return () => {
            modeler.destroy();
        };
    }, [diagramXml]);

    const exportDiagram = async () => {
        if (!modelerRef.current) return;

        try {
            const { xml } = await modelerRef.current.saveXML({ format: true });
            onExport?.(xml);
        } catch (err) {
            console.error('Could not save BPMN 2.0 diagram', err);
        }
    };

    return (
        <div className="relative h-full w-full">
            <div ref={containerRef} className="h-full w-full" />
        </div>
    );
};

export default BpmnModelerComponent;

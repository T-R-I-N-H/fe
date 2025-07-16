export const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_0mdcmbf" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0mdcmbf" />
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

// Regex patterns for cleaning BPMN XML strings
export const BPMN_CLEANUP_REGEX = {
    // Remove escaped newlines
    ESCAPED_NEWLINES: /\\n/g,
    // Remove escaped quotes
    ESCAPED_QUOTES: /\\"/g,
    // Remove all escape characters
    ALL_ESCAPES: /\\(.)/g,
    // Clean up extra whitespace
    EXTRA_WHITESPACE: /\s+/g,
    // Remove leading/trailing whitespace from lines
    LINE_WHITESPACE: /^\s+|\s+$/gm,
};

// Helper function to clean BPMN XML string
export const cleanBpmnXml = (xmlString: string): string => {
    return xmlString
        ?.replace(BPMN_CLEANUP_REGEX.ESCAPED_NEWLINES, '\n')
        .replace(BPMN_CLEANUP_REGEX.ESCAPED_QUOTES, '"')
        .trim();
};

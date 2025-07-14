export type Diagram = {
    diagram_id: string;
    diagram_data: string;
    diagram_name: string;
    diagram_description: string;
    file_urls: string[];
};

export type DiagramDetails = {
    diagram_id: string;
    diagram_data: string;
    diagram_name: string;
    diagram_description: string;
    files: {
        name: string;
        type: string;
        url: string;
    }[];
};

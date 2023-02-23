export interface Graph {
    nodes: GraphNode[];
    links: GraphLink[];
}

export interface GraphNode {
    id: string;
    color?: string;
    size?: number;
    symbolType?:
        | 'circle'
        | 'cross'
        | 'diamond'
        | 'square'
        | 'star'
        | 'triangle'
        | 'wye';
}

export interface GraphLink {
    source: string;
    target: string;
}

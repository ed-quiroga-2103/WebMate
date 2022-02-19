export interface CourseData {
    graph: {
        name: string;
        linkedTo: string[];
    }[];
    name: string;
    description: string;
    code: string;
    dependencies: string[];
}

export interface CourseFilters {
    name: string;
    code: string;
    dependencies: string[];
    status: string;
}

export interface Course {
    name: string;
    description: string;
    status: string;
    code: string;
    dependencies: string[];
    graph: Graph;
}

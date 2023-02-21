const formatCourseRequest = (
    name: string,
    code: string,
    description: string,
    topics: { id: number; text: string; tags: { id: number; text: string }[] }[]
): {
    graph: {
        name: string;
        linkedTo: string[];
    }[];

    name: string;
    description: string;
    code: string;
    dependencies: string[];
} => {
    const graph: {
        name: string;
        linkedTo: string[];
    }[] = [];

    for (const topic of topics) {
        graph.push({
            name: topic.text,
            linkedTo: topic.tags.map((tag) => {
                return tag.text;
            }),
        });
    }

    return { name, code, description, dependencies: [], graph };
};

export default formatCourseRequest;

const formatCourseRequest = (name, code, description, topics) => {
    const graph = [];

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

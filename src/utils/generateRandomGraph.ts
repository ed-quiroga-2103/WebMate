const generateRandomGraph = (length: number, linksPerNode: number) => {
    const nodes = fillNodes(length);
    const links = [];

    for (let i = 0; i < length; i++) {
        const node = nodes[i];

        for (let j = 0; j < Math.floor(Math.random() * linksPerNode) + 1; j++) {
            links.push({
                source: node.id,
                target: `${getRandomTarget(i, length)}`,
            });
        }
    }

    return { nodes, links };
};

const fillNodes = (nodes: number) => {
    const result = [];
    for (let i = 0; i < nodes; i++) {
        result.push({
            id: `${i}`,
            label: 'Lorem',
            available: Math.random() > 0.5,
        });
    }
    return result;
};

const getRandomTarget = (source: number, max: number) => {
    let target = Math.floor(Math.random() * max);

    while (target === source) {
        target = Math.floor(Math.random() * max);
    }

    return target;
};

export default generateRandomGraph;

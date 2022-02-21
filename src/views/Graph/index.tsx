import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../lib/api';

import { Graph2D } from '../../components/Graph/Graph2D';
import { Graph3D } from '../../components/Graph/Graph3D';

interface IGraphViewProps {
    threeD: boolean;
}

export const GraphView: FC<IGraphViewProps> = (props) => {
    const { id } = useParams();
    const [course, setCourse] = useState(undefined);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await api.courses.find(id);

            setCourse(response);
        };

        fetchCourse();
    }, []);

    return (
        <div>
            {props.threeD ? (
                course ? (
                    <Graph2D
                        nodeSize={10}
                        // linkLength={75}
                        linkWidth={2}
                        arrowLength={4}
                        singleClick={() => {
                            console.log('single');
                        }}
                        doubleClick={() => {
                            console.log('double');
                        }}
                        graphDataInput={{
                            nodes: course ? course.graph.nodes : [],
                            links: course ? course.graph.links : [],
                        }}
                    />
                ) : (
                    ''
                )
            ) : course ? (
                <Graph3D
                    data={{
                        nodes: course ? course.graph.nodes : [],
                        links: course ? course.graph.links : [],
                    }}
                />
            ) : (
                ''
            )}
        </div>
    );
};

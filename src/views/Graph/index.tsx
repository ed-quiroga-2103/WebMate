import api from '../../lib/api';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../../components/Sidebar';

import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Graph2D } from '../../components/Graph/Graph2D';
import { Graph3D } from '../../components/Graph/Graph3D';
import { GraphSection, GraphWrapper } from './GraphElements';

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

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on={2} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <GraphSection>
                <GraphWrapper>
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
                </GraphWrapper>
            </GraphSection>
            <Footer />
        </>
    );
};

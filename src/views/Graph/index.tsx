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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

interface IGraphViewProps {
    threeD: boolean;
}

const DiagnosticToast = ({ navigate, courseId }) => {
    return (
        <div
            onClick={() => {
                // THIS IS WRONG
                navigate(`/quiz/${courseId}?type=D`);
            }}
        >
            Notamos que no has realizado el examen de diagnóstico.
            <br />
            ¡Has click acá para ir al examen de diagnóstico de este curso!
        </div>
    );
};

const DataToast = ({ params }) => {
    console.log(params.resources);
    return (
        <div>
            <table>
                <tbody>
                    {params.resources.map((resource, index) => {
                        return (
                            <tr key={index}>
                                <td>{resource.data}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

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

    const navigate = useNavigate();
    useEffect(() => {
        toast(<DiagnosticToast navigate={navigate} courseId={id} />, {
            position: 'top-right',
            autoClose: 20000,
        });
        return () => {};
    }, []);

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
                                    singleClick={(params) => {
                                        let result;
                                        for (const subject of course.subjects) {
                                            if (
                                                params.subjectId === subject.id
                                            ) {
                                                result = subject;
                                            }
                                        }

                                        toast(<DataToast params={result} />, {
                                            position: 'bottom-right',
                                            autoClose: false,
                                        });
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
            <ToastContainer />;
        </>
    );
};

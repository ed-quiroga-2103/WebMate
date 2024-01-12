import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Graph2D } from '../../components/Graph/Graph2D';
import { GraphSection, GraphWrapper } from './GraphElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../api/auth';
import courses from '../../api/courses';

const DiagnosticToast = ({ navigate, courseId }) => {
    return (
        <div
            onClick={() => {
                // THIS IS WRONG
                navigate(`/quiz?course=${courseId}`);
            }}
        >
            Notamos que no has realizado el examen de diagnóstico.
            <br />
            ¡Has click acá para ir al examen de diagnóstico de este curso!
        </div>
    );
};

const DataToast = ({ params }) => {
    const navigate = useNavigate();
    console.log(params);
    return (
        <div>
            <div className="graph-resource-modal header">
                <h4>Recursos: {params.name}</h4>
            </div>
            <div className="graph-resource-modal container">
                {params.resources.map((resource, index) => {
                    return (
                        <div key={`${index}-resource`}>
                            <span>{'>'}</span>
                            <a
                                className="graph-resource-modal container_resource"
                                href={resource.link}
                            >
                                {resource.data}
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="graph-resource-modal button-container">
                <button
                    className="graph-resource-modal eval-button"
                    onClick={() => {
                        navigate(
                            `/quiz?course=${params.course.id}&subject=${params.id}`
                        );
                        console.log('clicked eval');
                    }}
                >
                    Realizar evaluacion
                </button>
            </div>
        </div>
    );
};

export const GraphView = (props) => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const [course, setCourse] = useState(undefined);

    const [me, setMe] = useState(undefined);

    useEffect(() => {
        const fetchMe = async () => {
            const data = await auth.me();
            setMe(data);
        };

        fetchMe();
    }, []);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await courses.getBy.id(id);

            setCourse(response);
        };

        fetchCourse();
    }, []);

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    const navigate = useNavigate();
    let showedDiagnostic = false;
    useEffect(() => {
        if (!showedDiagnostic) {
            toast(<DiagnosticToast navigate={navigate} courseId={id} />, {
                position: 'top-right',
                autoClose: 20000,
            });
            showedDiagnostic = true;
        }
    }, []);

    return (
        <>
            <GraphSection>
                <GraphWrapper>
                    <div>
                        {course && me ? (
                            <Graph2D
                                onBack={() => navigate('/courses')}
                                onTest={() => navigate(`/quiz?course=${id}`)}
                                progress={me.user.progress[`${id}`]}
                                nodeSize={10}
                                // linkLength={75}
                                linkWidth={2}
                                arrowLength={4}
                                singleClick={(params) => {
                                    let result;
                                    for (const subject of course.subjects) {
                                        if (params.subjectId === subject.id) {
                                            result = subject;
                                        }
                                    }

                                    toast(
                                        <DataToast
                                            params={{ ...result, course }}
                                        />,
                                        {
                                            position: 'bottom-right',
                                            autoClose: false,
                                            closeOnClick: false,
                                        }
                                    );
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
                        )}
                    </div>
                </GraphWrapper>
            </GraphSection>
            <ToastContainer />
        </>
    );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Graph2D } from '../../components/Graph/Graph2D';
import { GraphSection, GraphWrapper } from './GraphElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../api/auth';
import courses from '../../api/courses';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

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



export const GraphView = (props) => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const [sidePanel, setSidePanel] = useState({})
    const [sideCollapsed, setSideCollapsed] = useState(true)

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
        <div className='graph-container'>
            <GraphSection>
                <GraphWrapper>
                    <div>
                        {course && me ? (
                            <Graph2D
                                onBack={() => navigate('/courses')}
                                onTest={() => navigate(`/questionsTest?course=${id}`)}
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
                                    setSidePanel({ ...result })
                                    console.log(sidePanel)
                                    setSideCollapsed(false)
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
            <Sidebar collapsed={sideCollapsed} collapsedWidth='0' onBackdropClick={() => console.log('click')}>
                <div className='sidebar'>
                    <div className='title-w-button'>
                        <h1>Recursos</h1>
                        <div>
                        <button onClick={()=>setSideCollapsed(true)}>x</button>
                        </div>
                    </div>
                    <p className='contained'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna ligula, faucibus non scelerisque sit amet, hendrerit eget ligula. Vestibulum urna massa, sodales tempor enim nec, porttitor luctus sem.
                    </p>
                </div>
                    <Menu>{sidePanel.resources && sidePanel.resources.map((resource)=><MenuItem onClick={()=>window.open(resource.link)}>{resource.data}</MenuItem>)}</Menu>
            </Sidebar>;
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import ScrollToTop from '../ScrollToTop';
import './index.css';
import {
    CoursesH1,
    CoursesWrapper,
    CoursesSection,
    Courses2Wrapper,
    SimpleWrapper,
} from './CoursesElements';
import api from '../../lib/api';

const Courses = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await api.courses.get();

            setCourses([...courses, ...data]);
        };

        fetchCourses();
    }, []);

    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on={2} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <CoursesSection>
                <CoursesWrapper>
                    <CoursesH1>Tus Cursos</CoursesH1>

                    <Courses2Wrapper>
                        {courses.map((data: any, index: any) => {
                            return (
                                <div className="card-grid-space">
                                    <div className="card" key={index}>
                                        <div className="div1">
                                            <h1>{data.name} </h1>
                                            <div>
                                                <div className="tags">
                                                    <div className="tag">
                                                        Código: {data.code}
                                                    </div>
                                                </div>
                                                <SimpleWrapper
                                                    to={`${data.id}`}
                                                >
                                                    Ir al curso
                                                </SimpleWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Courses2Wrapper>
                </CoursesWrapper>
            </CoursesSection>
        </>
    );
};
export default Courses;

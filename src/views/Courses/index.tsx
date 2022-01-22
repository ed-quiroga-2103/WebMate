import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import "./index.css";
import {
  CoursesH1,
  CoursesWrapper,
  CoursesSection,
  Courses2Wrapper,
  SimpleWrapper,
} from "./CoursesElements";

const Courses = ({ data }: { data: any }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  console.log(window.location.href);
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="courses" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <CoursesSection>
        <CoursesWrapper>
          <CoursesH1>Tus Cursos</CoursesH1>

          <Courses2Wrapper>
            {data.map((data: any, index: any) => {
              return (
                <div className="card-grid-space">
                  <div className="card" key={index}>
                    <div className="div1">
                      <h1>{data.curso} </h1>
                      <div>
                        <p>Profesor: {data.profesor}</p>
                        <div className="tags">
                          <div className="tag">Grupo: {data.grupo}</div>
                        </div>
                        <SimpleWrapper to={data.link}>
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

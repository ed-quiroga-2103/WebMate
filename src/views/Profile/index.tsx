import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import "./index.scss";
import {
  Column1,
  Column2,
  Column3,
  Heading,
  Img,
  InfoContainer,
  InfoRow,
  Subtitle,
  Subtitle2,
  TextDiv,
  TextWrapper,
  TopLine,
  UnitSection,
  UnitWrapper,
} from "./ProfileElements";

const Profile = ({ data, grades }: { data: any; grades: any }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar toggle={toggle} on={1} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <UnitSection>
        <UnitWrapper>
          {data.map((data: any, index: any) => {
            return (
              <InfoContainer>
                <InfoRow id={data.id}>
                  <Column1>
                    <TextWrapper>
                      <TextDiv>
                        <TopLine>{data.carrera}</TopLine>
                        <Heading>{data.nombre}</Heading>
                      </TextDiv>
                      <Subtitle>Correo </Subtitle>
                      <Subtitle2>{data.correo}</Subtitle2>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <TextWrapper>
                      <Subtitle>Curso Actual </Subtitle>
                      <Subtitle2>{data.curso}</Subtitle2>
                      <Subtitle>Promedio Test</Subtitle>
                      <Subtitle2>{data.promedio}</Subtitle2>
                      <Subtitle>Test realizados </Subtitle>
                      <Subtitle2>{data.test}</Subtitle2>
                      <Subtitle>Sede</Subtitle>
                      <Subtitle2>{data.sede}</Subtitle2>
                    </TextWrapper>
                  </Column2>
                  <Column3>
                    <Img src={data.imagen}></Img>
                  </Column3>
                </InfoRow>
              </InfoContainer>
            );
          })}
        </UnitWrapper>
        <UnitWrapper>
          <div className="containerProfile">
            <h2 className="h2Profile">Historial de Notas</h2>
            <ul className="responsive-tableProfile">
              <li className="table-header">
                <div className="col col-1">id</div>
                <div className="col col-2">Curso</div>
                <div className="col col-3">Tipo de Prueba</div>
                <div className="col col-4">Fecha</div>
                <div className="col col-5">Nota</div>
              </li>
              {grades.map((grade: any, index: any) => {
                return (
                  <li className="table-row" id={grade.id}>
                    <div className="col-1" data-label="ID">
                      {grade.id}
                    </div>
                    <div className="col-2" data-label="Course Name">
                      {grade.course}
                    </div>
                    <div className="col-3" data-label="Type">
                      {grade.type}
                    </div>
                    <div className="col-4" data-label="Date">
                      {grade.date}
                    </div>
                    <div className="col-5" data-label="Grade">
                      {grade.grade}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </UnitWrapper>
      </UnitSection>
      <Footer />
    </>
  );
};

export default Profile;

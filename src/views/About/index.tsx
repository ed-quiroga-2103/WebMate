import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  AboutSection,
  AboutWrapper,
  Subtitle,
  Heading,
  InfoContainer,
  InfoRow,
  TopLine,
} from "./AboutElements";

function About() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="about" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection>
        <AboutWrapper>
          <InfoContainer>
            <InfoRow>
              <TopLine>Proyecto de la Escuela de Matemática del ITCR</TopLine>
              <Heading>¿Qué somos?</Heading>
              <Subtitle>
                Es un proyecto de la escuela de matemática del ITCR para
                facilicar el aprendizaje de los cursos de la escuela. En este
                podrás estudiar cualqueir materia del curso con material
                accesible, fácil y en un solo lugar. Podrás realizar
                evaluaciones, consultar notas y repasar para las pruebas.
              </Subtitle>
              <Heading>¿En qué te servirá?</Heading>
              <Subtitle>
                En está página encontrará toda la materia, práctica y ejercicios
                necesarios para el curso. Es más fácil si toda la información
                está en un mismo lugar, donde no tendrás que buscar la materia y
                ejercicios relacionados ya que todo lo podrás consultar aquí.
              </Subtitle>
            </InfoRow>
          </InfoContainer>
        </AboutWrapper>
      </AboutSection>
    </>
  );
}

export default About;

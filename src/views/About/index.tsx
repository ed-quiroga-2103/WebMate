import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import ScrollToTop from '../ScrollToTop';

import { useState } from 'react';
import {
    AboutContainer,
    AboutRow,
    AboutSection,
    AboutWrapper,
    Header,
    Subtitle,
    TopLine,
} from './AboutElements';

function About() {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on={4} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <AboutSection>
                <AboutWrapper>
                    <AboutContainer>
                        <AboutRow>
                            <TopLine>
                                Proyecto de la Escuela de Matemática del ITCR
                            </TopLine>
                            <Header>¿Qué somos?</Header>
                            <Subtitle>
                                Es un proyecto de la escuela de matemática del
                                ITCR para facilicar el aprendizaje de los cursos
                                de la escuela. En este podrás estudiar cualqueir
                                materia del curso con material accesible, fácil
                                y en un solo lugar. Podrás realizar
                                evaluaciones, consultar notas y repasar para las
                                pruebas.
                            </Subtitle>
                            <Header>¿En qué te servirá?</Header>
                            <Subtitle>
                                En está página encontrará toda la materia,
                                práctica y ejercicios necesarios para el curso.
                                Es más fácil si toda la Aboutrmación está en un
                                mismo lugar, donde no tendrás que buscar la
                                materia y ejercicios relacionados ya que todo lo
                                podrás consultar aquí.
                            </Subtitle>
                        </AboutRow>
                    </AboutContainer>
                </AboutWrapper>
            </AboutSection>
            <Footer />
        </>
    );
}

export default About;

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import ScrollToTop from '../ScrollToTop';

import { useState } from 'react';
import {
    ContactSection,
    ContactWrapper,
    Header,
    ContactContainer,
    ContactRow,
    Subtitle,
    TopLine,
} from './ContactElements';

const Contact = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on={3} />
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <ContactSection>
                <ContactWrapper>
                    <ContactContainer>
                        <ContactRow>
                            <TopLine>
                                Proyecto de la Escuela de Matemática del ITCR
                            </TopLine>
                            <Header>Contactanos</Header>
                            <Subtitle>
                                Este es un proyecto que todavía se está
                                desarrollando, nos puedes escribir o bien deja
                                tu comentario.
                            </Subtitle>
                            <Subtitle>Número de teléfono:</Subtitle>
                            <Subtitle>2550-2225</Subtitle>
                        </ContactRow>
                    </ContactContainer>
                </ContactWrapper>
            </ContactSection>
            <Footer />
        </>
    );
};

export default Contact;

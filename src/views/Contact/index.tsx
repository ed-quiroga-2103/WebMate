import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  Column1,
  ContactSection,
  ContactWrapper,
  Form2,
  Heading,
  InfoContainer,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContactElements";

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
          <InfoContainer>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <Form2>
                    <TopLine>
                      Proyecto de la Escuela de Matemática del ITCR
                    </TopLine>
                    <Heading>Contactanos</Heading>
                    <Subtitle>
                      Este es un proyecto que todavía se está desarrollando, nos
                      puedes escribir o bien deja tu comentario.
                    </Subtitle>
                    <div>
                      <Subtitle>Número de teléfono </Subtitle>
                      <Subtitle>2550-2225</Subtitle>
                    </div>
                  </Form2>
                </TextWrapper>
              </Column1>
            </InfoRow>
          </InfoContainer>
        </ContactWrapper>
      </ContactSection>
      <Footer />
    </>
  );
};

export default Contact;

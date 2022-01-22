import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  Column1,
  Column2,
  ContactSection,
  ContactWrapper,
  Form,
  Form2,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormInput2,
  FormLabel,
  Heading,
  InfoContainer,
  InfoRow,
  InputWrapper,
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
      <Navbar toggle={toggle} on="contact" />
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
              <Column2>
                <FormContent>
                  <Form action="/">
                    <FormH1>Comentanos como podemos mejorar</FormH1>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Correo</FormLabel>
                      <FormInput type="email" required></FormInput>
                    </InputWrapper>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Nombre</FormLabel>
                      <FormInput type="text" required></FormInput>
                    </InputWrapper>
                    <InputWrapper>
                      <FormLabel htmlFor="for">Mensaje</FormLabel>
                      <FormInput2 type="textarea" required></FormInput2>
                    </InputWrapper>
                    <FormButton type="submit">Enviar</FormButton>
                  </Form>
                </FormContent>
              </Column2>
            </InfoRow>
          </InfoContainer>
        </ContactWrapper>
      </ContactSection>
    </>
  );
};

export default Contact;

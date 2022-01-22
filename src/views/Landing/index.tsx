import React, { useState } from "react";
import { FooterA } from "../../components/Footer/FooterElements";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { LandingSection, LandingWrapper } from "./LandingElements";
import "./index.scss";
function Landing() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="Landing" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <LandingSection>
        <LandingWrapper>
          <div className="cards">
            <div className="card3 content">
              <div className="card3-content">
                <FooterA href="/perfil">
                  <div className="card3-img">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                      alt="Gamer"
                    />
                  </div>
                  <div className="card3-label">Perfil</div>
                  <div className="card3-title">Toda tu información y notas</div>
                </FooterA>
              </div>
            </div>
            <div className="card3 content">
              <div className="card3-content">
                <FooterA href="/cursos">
                  <div className="card3-img">
                    <img
                      src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                      alt="keyboard"
                    />
                  </div>
                  <div className="card3-label">Cursos</div>
                  <div className="card3-title">Revisa tus cursos</div>
                </FooterA>
              </div>
            </div>
            <div className="card3 content">
              <div className="card3-content">
                <FooterA href="/contacto">
                  <div className="card3-img">
                    <img
                      src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                      alt="Controller"
                    />
                  </div>
                  <div className="card3-label">Contacto </div>
                </FooterA>
                <div className="card3-title">
                  ¿Tienes alguan duda?, escríbenos
                </div>
              </div>
            </div>
            <div className="card3 form2">
              <div className="form2-title">Otro feature?</div>
            </div>
          </div>
        </LandingWrapper>
      </LandingSection>
    </>
  );
}

export default Landing;

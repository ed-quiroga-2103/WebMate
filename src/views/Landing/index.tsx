import ScrollToTop from '../ScrollToTop';
import './index.scss';

import { FooterA } from '../../components/Footer/FooterElements';
import { LandingSection, LandingWrapper } from './LandingElements';

function Landing() {
    return (
        <>
            <ScrollToTop />
            <LandingSection>
                <LandingWrapper>
                    <div className="cards">
                        <div className="card3 content">
                            <div className="card3-content">
                                <FooterA href="/profile">
                                    <div className="card3-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                                            alt="perfil"
                                        />
                                    </div>
                                    <div className="card3-label">Perfil</div>
                                    <div className="card3-title">
                                        Toda tu información y notas
                                    </div>
                                </FooterA>
                            </div>
                        </div>
                        <div className="card3 content">
                            <div className="card3-content">
                                <FooterA href="/courses">
                                    <div className="card3-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                            alt="cursos"
                                        />
                                    </div>
                                    <div className="card3-label">Cursos</div>
                                    <div className="card3-title">
                                        Revisa tus cursos
                                    </div>
                                </FooterA>
                            </div>
                        </div>
                        <div className="card3 content">
                            <div className="card3-content">
                                <FooterA href="/contact">
                                    <div className="card3-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                                            alt="contacto"
                                        />
                                    </div>
                                    <div className="card3-label">Contacto </div>
                                </FooterA>
                                <div className="card3-title">
                                    ¿Tienes alguan duda?
                                </div>
                            </div>
                        </div>
                        <div className="card3 form2">
                            <div className="form2-title">Perfil</div>
                        </div>
                    </div>
                </LandingWrapper>
            </LandingSection>
        </>
    );
}

export default Landing;

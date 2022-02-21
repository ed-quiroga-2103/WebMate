import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterP,
    FooterA,
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <div
            style={{
                marginTop: 'auto',
            }}
        >
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle to="/cursos">
                                    Cursos
                                </FooterLinkTitle>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle to="/contacto">
                                    Contactanos
                                </FooterLinkTitle>
                                <FooterA
                                    target="_blank"
                                    href="tel:+50625502225"
                                ></FooterA>
                                <FooterA
                                    target="_blank"
                                    href="https://wa.link/jgf3nq"
                                ></FooterA>
                                <FooterA
                                    target="_blank"
                                    href="mailto:agarro@itcr.ac.cr"
                                ></FooterA>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle to="/perfil">
                                    Perfil
                                </FooterLinkTitle>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <WebsiteRights>
                                MathApp © {new Date().getFullYear()} Todos los
                                derechos reservados
                            </WebsiteRights>
                            <SocialLogo to="/" onClick={toggleHome}>
                                MathApp
                            </SocialLogo>

                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.facebook.com/ematetec/"
                                    target="_blank"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://instagram.com"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://youtube.com"
                                    target="_blank"
                                    aria-label="Youtube"
                                >
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://wa.link/jgf3nq"
                                    target="_blank"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </div>
    );
};

export default Footer;

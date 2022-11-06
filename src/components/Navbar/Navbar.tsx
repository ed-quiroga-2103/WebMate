import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Button } from '../ButtonElement/ButtonElements';
import logo from './mathLogo.png';
import {
    Nav,
    NavbarContainer,
    MobileLogo,
    NavItem,
    NavMenu,
    NavLinksProfile,
    NavLinksCourses,
    NavLinksContact,
    NavLinksAbout,
    NavbarBigContainer,
    Logo,
    NavBtn,
} from './NavbarElements';

const Navbar = ({ toggle, on }: { toggle: any; on: any }) => {
    const token = localStorage.getItem('mochi');

    return (
        <>
            <NavbarBigContainer>
                <a href="http://localhost:4000/home">
                    <Logo src={logo} />
                </a>
                <Nav>
                    <NavbarContainer>
                        <MobileLogo onClick={toggle}>
                            <FaBars />
                        </MobileLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinksCourses to="/courses" o={on}>
                                    Cursos
                                </NavLinksCourses>
                            </NavItem>
                            <NavItem>
                                <NavLinksProfile to="/profile" o={on}>
                                    Perfil
                                </NavLinksProfile>
                            </NavItem>
                            <NavItem>
                                <NavLinksContact to="/contact" o={on}>
                                    Contacto
                                </NavLinksContact>
                            </NavItem>
                            <NavItem>
                                <NavLinksAbout to="/about" o={on}>
                                    Sobre Nosotros
                                </NavLinksAbout>
                            </NavItem>

                            {token ? (
                                <NavBtn>
                                    <Button to="/">Cerrar Sesión</Button>
                                </NavBtn>
                            ) : (
                                <NavBtn>
                                    <Button to="/">Iniciar Sesión</Button>
                                </NavBtn>
                            )}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </NavbarBigContainer>
        </>
    );
};

export default Navbar;

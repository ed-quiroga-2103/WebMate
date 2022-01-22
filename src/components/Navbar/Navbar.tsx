import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "../ButtonElement/ButtonElements";
import logo from "./mathLogo.png";
import {
  Nav,
  NavbarContainer,
  MobileLogo,
  NavItem,
  NavMenu,
  NavLinks,
  NavbarBigContainer,
  Logo,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ toggle, on }: { toggle: any; on: any }) => {
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
                <NavLinks to="/cursos" o={on}>
                  Cursos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/perfil" o={on}>
                  Perfil
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contacto" o={on}>
                  Contacto
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/sobre" o={on}>
                  Sobre Nosotros
                </NavLinks>
              </NavItem>
              <NavBtn>
                <Button to="/">Cerrar sesión</Button>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </NavbarBigContainer>
    </>
  );
};

export default Navbar;

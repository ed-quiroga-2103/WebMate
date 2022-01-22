import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }: { isOpen: any; toggle: any }) => {
  return (
    <SidebarContainer o={(isOpen = { isOpen })} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/cursos" onClick={toggle}>
            Cursos
          </SidebarLink>
          <SidebarLink to="/perfil" onClick={toggle}>
            Perfil
          </SidebarLink>
          <SidebarLink to="/contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
          <SidebarLink to="/sobre" onClick={toggle}>
            Sobre Nosotros
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Cerrar sesión
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

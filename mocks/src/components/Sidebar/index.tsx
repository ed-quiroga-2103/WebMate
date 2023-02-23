import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }: { isOpen: any; toggle: any }) => {
    return (
        <SidebarContainer o={(isOpen = { isOpen })} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/courses" onClick={toggle}>
                        Cursos
                    </SidebarLink>
                    <SidebarLink to="/profile" onClick={toggle}>
                        Perfil
                    </SidebarLink>
                    <SidebarLink to="/contact" onClick={toggle}>
                        Contacto
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
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

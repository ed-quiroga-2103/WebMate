import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

interface Props {
  o?: {
    isOpen: boolean;
  };
}

export const SidebarContainer = styled.aside<Props>`
  position: fixed;
  z-index: 999;
  top: -80px;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(Props) => (Props.o?.isOpen ? "100%" : "0")};
  top: ${(Props) => (Props.o?.isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;

  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 7%;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  justify-content: center;

  @media screen and (max-widht: 480px) {
    grid-template-rows: reapeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  padding: 16px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ffb703;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #10606;
  }
`;

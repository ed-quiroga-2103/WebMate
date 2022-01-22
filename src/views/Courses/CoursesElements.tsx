import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const CoursesSection = styled.section`
  background: #023047;
  height: 550px;
  margin-top: 80px;
  overflow-x: hidden;

  @media screen and (max-width: 1200px) {
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 760px) {
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 760px) {
    padding: 0px 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CoursesWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 550px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  justify-content: center;
`;
export const SimpleWrapper = styled(LinkR)`
  background: #ffb703;
  width: 90%;
  height: 17%;
  border-radius: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 75%;
  color: #023047;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    top: 85%;
    height: 12%;
    width: 95%;
    left: 2.5%;
  }
`;
export const Courses2Wrapper = styled.div`
  overflow: visible;

  max-width: 1000px;
  margin-left: -5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 0%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin-left: 0%;
  }
`;

export const CoursesH1 = styled.h1`
  font-size: 2.5rem;
  color: #f9f9f9;
  margin-top: 16px;
  margin-bottom: 16px;
  left: 50%;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

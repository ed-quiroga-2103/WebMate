import styled from "styled-components";

export const AboutSection = styled.section`
  background: #023047;
  margin-top: 80px;
  height: 540px;
  overflow: hidden;
  @media screen and (max-width: 1300px) {
    transition: all 0.2s ease-in-out;
    height: 700px;
  }
  @media screen and (max-width: 760px) {
    padding: 50px 0;
    height: 700px;
  }
  @media screen and (max-width: 500px) {
    padding: 50px 0;
    height: 850px;
  }
`;

export const AboutWrapper = styled.div`
  margin-top: 2%;
  display: grid;
  z-index: 1;
  height: 480px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 10px;
  color: #f9f9f9;
  border-radius: 50px;
  background: #f9f9f9;
  width: 80vw;
  overflow-x: hidden;
  height: 480px;
  margin-bottom: 10px;
  overflow-y: hidden;
  margin-left: 1%;
  @media screen and (max-width: 1300px) {
    transition: all 0.2s ease-in-out;
    height: 550px;
    width: 70vw;
  }
  @media screen and (max-width: 900px) {
    padding: 0px 0;
    height: 600px;
    width: 92%;
    margin-left: 5%;
  }
  @media screen and (max-width: 564px) {
    height: 650px;
  }
  @media screen and (max-width: 500px) {
    height: 850px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1100px;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0;
  @media screen and (max-width: 1300px) {
    transition: all 0.2s ease-in-out;
    height: 1000px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TopLine = styled.p`
  color: #1ea2a4;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transfor: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 500px) {
  }
`;
export const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
  font-weight: 600;
  color: #101522;
  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  padding: 15px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: #101522;
  justify-content: center;
  @media screen and (max-width: 936px) {
  }
  @media screen and (max-width: 762px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

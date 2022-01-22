import styled from "styled-components";
export const Container = styled.div`
  height: 700px;
  overflow: hidden;
  z-index: 0;
  overflow: hidden;
  background: #023047;
`;

export const FormWrap = styled.div`
  display: grid;
  z-index: 1;
  height: 480px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    height: 100vh;
  }
`;

export const Logo = styled.img`
  margin-left: 47%;
  width: 50px;
  height: 50px;
  background: none;
  overflow: hidden;
  overflow: visible;
  z-index: 10;
  @media screen and (max-width: 1300px) {
    transition: all 0.2s ease-in-out;
    margin-left: 45%;
  }
  @media screen and (max-width: 1000px) {
    transition: all 0.2s ease-in-out;
    margin-left: 43%;
  }
`;

export const FormContent = styled.div`
  margin-top: 10%;
  padding: 40px;
  border-radius: 10px;
  background: #1ea2a4;
  width: 40vw;
  overflow-x: hidden;
  height: 480px;
  margin-bottom: 10px;
  overflow-y: hidden;
  @media screen and (max-width: 647px) {
    transition: all 0.2s ease-in-out;
    width: 55vw;
    padding: 20px;
  }
`;

export const Form = styled.form`
  z-index: 1;
  display: grid;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);
  transition: all 0.2s ease-in-out;
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #ffb703;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  width: 50%;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25%;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffb703;
  }
`;

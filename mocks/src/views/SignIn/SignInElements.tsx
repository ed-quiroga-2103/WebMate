import styled from 'styled-components';
export const SignInContainer = styled.div`
    background: #023047;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
`;

export const FormWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`;

export const Logo = styled.img`
    background: none;
    height: 100px;
    margin: auto;
    width: 100px;
    z-index: 10;
`;

export const FormContent = styled.div`
    background: #1ea2a4;
    border-radius: 10px;
    height: 70vh;
    margin-top: 10%;
    overflow: hidden;
    padding: 40px;
    width: 40vw;
    @media screen and (max-width: 647px) {
        transition: all 0.2s ease-in-out;
        width: 55vw;
        height: 60vh;
    }
`;

export const Form = styled.form`
    border-radius: 4px;
    box-shadow: 0 1px 3px rbga(0, 0, 0, 0.9);
    display: grid;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
    z-index: 1;
`;

export const FormH1 = styled.h1`
    color: #f9f9f9;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    color: #f9f9f9;
`;

export const FormInput = styled.input`
    background: #f9f9f9;
    border: none;
    border-radius: 4px;
    margin-bottom: 32px;
    padding: 16px 16px;
`;

export const FormButton = styled.button`
    background: #ffb703;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #023047;
    font-size: 20px;
    margin: auto;
    padding: 16px 0;
    width: 50%;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }
`;

export const Text = styled.span`
    color: #f9f9f9;
    cursor: pointer;
    font-size: 14px;
    margin-top: 24px;
    text-align: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #ffb703;
    }
`;

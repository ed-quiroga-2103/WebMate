import styled from 'styled-components';

export const AboutSection = styled.section`
    background: #023047;
    height: 100vh;
    margin-top: 80px;
    overflow: hidden;
`;

export const AboutWrapper = styled.div`
    display: grid;
    height: 90vh;
    justify-content: center;
    margin: auto;
    max-width: 100vw;
    padding: 0 24px;
    z-index: 1;
`;

export const AboutContainer = styled.div`
    background: #f9f9f9;
    border-radius: 50px;
    height: 80%;
    max-width: 80vh;
    margin: auto;
    overflow-x: hidden;
    width: 80%;
`;

export const AboutRow = styled.div`
    align-items: center;
    display: grid;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const TopLine = styled.p`
    color: #1ea2a4;
    font-size: 100%;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
`;
export const Header = styled.h1`
    color: #023047;
    font-size: 150%;
    font-weight: 600;
    line-height: 1.1;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: #023047;
    font-size: 120%;
    line-height: 24px;
    padding: 15px;
    text-align: center;

    @media screen and (max-width: 950px) {
        font-size: 80%;
    }
`;

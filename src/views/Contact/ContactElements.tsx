import styled from 'styled-components';

export const ContactSection = styled.section`
    background: #023047;
    height: 100vh;
    margin-top: 80px;
    overflow: hidden;
`;

export const ContactWrapper = styled.div`
    display: grid;
    height: 90vh;
    margin: auto;
    max-width: 100vw;
    padding: 0 24px;
    z-index: 1;
`;

export const ContactContainer = styled.div`
    background: #f9f9f9;
    border-radius: 50px;
    height: 80%;
    margin: auto;
    overflow: hidden;
    width: 80%;
`;

export const ContactRow = styled.div`
    align-items: center;
    display: grid;
    height: 100%;
    justify-content: center;
    margin: auto;
    width: 80%;
`;

export const TopLine = styled.p`
    color: #1ea2a4;
    font-size: 100%;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 16px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
`;
export const Header = styled.h1`
    color: #101522;
    font-size: 210%;
    font-weight: 600;
    line-height: 1.1;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: #101522;
    font-size: 150%;
    line-height: 24px;
    text-align: center;

    @media screen and (max-width: 647px) {
        font-size: 80%;
    }
`;

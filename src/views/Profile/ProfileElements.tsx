import styled from 'styled-components';

export const ProfileSection = styled.section`
    background: #023047;
    height: 100vh;
    margin-top: 80px;
    overflow-x: hidden;
`;

export const ProfileWrapper = styled.div`
    align-items: center;
    display: grid;
    height: 80vh;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    justify-content: center;
    overflow: visible;
    padding: 0 24px;
    z-index: 1;
`;

export const InfoContainer = styled.div`
    background: #f9f9f9;
    border-radius: 50px;
    display: grid;
    height: 70vh;
    justify-content: center;
    margin: auto;
    overflow-x: hidden;
    width: 90%;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col3';
    justify-content: center;
    margin: auto;
    width: 90%;

    @media screen and (max-width: 900px) {
        grid-template-areas: 'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3';
    }
`;
export const Column1 = styled.div`
    display: grid;
    grid-area: col1;
    justify-content: center;
    margin: auto;
    padding: 0 15px;
    text-align: center;
`;
export const Column2 = styled.div`
    display: grid;
    grid-area: col2;
    justify-content: center;
    margin-top: 5%;
    padding: 0 15px;
    text-align: center;
`;
export const Column3 = styled.div`
    display: grid;
    grid-area: col3;
    justify-content: center;
    margin: auto;
    padding: 0 15px;
`;
export const TextWrapper = styled.div`
    max-width: 600px;
    @media screen and (max-width: 400px) {
        max-width: 270px;
    }
`;

export const TextDiv = styled.div`
    margin-bottom: 70px;

    @media screen and (max-width: 900px) {
        margin-bottom: 30px;
    }
`;

export const TopLine = styled.p`
    color: #1ea2a4;
    font-size: 120%;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 16px;
    margin-bottom: 16px;
    text-transform: uppercase;
`;
export const Header = styled.h1`
    color: #101522;
    font-size: 170%;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 24px;
`;

export const Subtitle = styled.p`
    color: #101522;
    font-size: 120%;
    font-weight: bold;
    line-height: 24px;
    max-width: 440px;
`;
export const Subtitle2 = styled.p`
    color: #101522;
    font-size: 110%;
    line-height: 24px;
    max-width: 440px;
`;

export const Img = styled.img`
    frameborder: 0;
    border: 1;
    aria-hidden: false;
    tabindex: 0;
    width: 100%;
    height: 100%;
`;

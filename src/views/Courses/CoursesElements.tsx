import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CoursesSection = styled.section`
    background: #023047;
    height: 100vh;
    margin-top: 80px;
    overflow-x: hidden;
    transition: all 0.2s ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CoursesWrapper = styled.div`
    align-items: center;
    display: grid;
    height: 100%;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    z-index: 1;
`;
export const SimpleWrapper = styled(LinkR)`
    align-items: center;
    background: #ffb703;
    border-radius: 60px;
    color: #023047;
    display: flex;
    font-size: 0.9rem;
    font-weight: 600;
    height: 17%;
    justify-content: space-around;
    position: absolute;
    text-align: center;
    text-decoration: none;
    width: 90%;
    top: 75%;

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
    align-items: center;
    display: grid;
    grid-gap: 16px;
    max-width: 1000px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: -5%;

    overflow: visible;
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
    color: #f9f9f9;
    font-size: 2.5rem;
    left: 50%;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

import { FC, useEffect, useRef, useState } from 'react';
import './index.scss';
import { TagBar } from '../../components/Tagbar';
import { text } from 'd3';
import { CourseForm } from '../../components/CourseForm';
import { TestSection, TestWrapper } from './testElements';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../../components/Sidebar';

interface ITestProps {}

export const Test: FC<ITestProps> = (props) => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on="partner" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <TestSection>
                <TestWrapper>
                    <div className="">
                        <CourseForm></CourseForm>
                    </div>
                </TestWrapper>
            </TestSection>
        </>
    );
};

// Notes
// document.body.style.overflow = 'hidden';

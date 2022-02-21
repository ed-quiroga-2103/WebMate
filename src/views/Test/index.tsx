import { FC, useEffect, useRef, useState } from 'react';
import './index.scss';
import { TagBar } from '../../components/Tagbar';
import { text } from 'd3';
import { CourseForm } from '../../components/CourseForm';

interface ITestProps {}

export const Test: FC<ITestProps> = (props) => {
    return (
        <div className="">
            <CourseForm></CourseForm>
        </div>
    );
};

// Notes
// document.body.style.overflow = 'hidden';

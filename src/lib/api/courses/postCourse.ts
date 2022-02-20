import axios from 'axios';
import { post } from 'jquery';
import { CourseData } from '../../../types';
import { API_URL } from '../config';

const postCourse = async (courseData: CourseData) => {
    const response = await axios(`${API_URL}/courses`, {
        method: 'POST',
        data: courseData,
    }).catch((error) => error.response);

    return response.data.course ? response.data.course : response.data;
};

export default postCourse;

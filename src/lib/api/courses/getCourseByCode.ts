import { API_URL } from '../config';
import axios from 'axios';
import { Course } from '../../../types';

const getCourses = async (code: string): Promise<Course> => {
    const response = await axios(
        `${API_URL}/courses?filter[0]=code&value[0]=${code}`,
        {
            method: 'GET',
        }
    ).catch((error) => error.response);

    return response.data.courses[0];
};

export default getCourses;

import { API_URL } from '../config';
import axios from 'axios';

const getCourseById = async (id) => {
    const response = await axios(`${API_URL}/courses/${id}`, {
        method: 'GET',
    }).catch((error) => error.response);

    return response.data.course ? response.data.course : response.data;
};

export default getCourseById;

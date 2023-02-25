import formatFilters from '../../utils/formatters/formatFilters';
import { API_URL } from '../config';
import axios from 'axios';

const getCourses = async (filters) => {
    let formattedFilters = '';

    if (filters) {
        formattedFilters = formatFilters(filters);
    }

    const response = await axios(`${API_URL}/courses?${formattedFilters}`, {
        method: 'GET',
    }).catch((error) => error.response);

    return response.data.courses ? response.data.courses : response.data;
};

export default getCourses;

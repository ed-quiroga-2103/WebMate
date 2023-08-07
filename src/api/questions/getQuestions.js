import axios from 'axios';
import { API_URL } from '../config';

const getQuestions = async (filters) => {
    const response = await axios(`${API_URL}/questions?size=100`, {
        method: 'GET',
    }).catch((error) => {
        console.log('ERROR', error);
        return error.response;
    });

    return response.data.questions ? response.data.questions : response.data;
};

export default getQuestions;

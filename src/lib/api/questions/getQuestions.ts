import axios from 'axios';
import formatFilters from '../../../utils/formatters/formatFilters';
import { Question, QuestionFilters } from '../../../types';
import { API_URL } from '../config';

const getQuestions = async (filters?: QuestionFilters): Promise<Question[]> => {
    const formattedFilters = filters
        ? formatFilters<QuestionFilters>(filters)
        : '';

    const response = await axios(`${API_URL}/questions?${formattedFilters}`, {
        method: 'GET',
    }).catch((error) => {
        console.log('ERROR', error);
        return error.response;
    });

    return response.data.questions ? response.data.questions : response.data;
};

export default getQuestions;

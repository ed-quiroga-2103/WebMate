import axios from 'axios';
import { Question, QuestionFilters } from '../../../types';
import { API_URL } from '../config';

const getQuestionById = async (id: string): Promise<Question> => {
    const response = await axios(`${API_URL}/questions/${id}`, {
        method: 'GET',
    }).catch((error) => error.response);

    return response.data;
};

export default getQuestionById;

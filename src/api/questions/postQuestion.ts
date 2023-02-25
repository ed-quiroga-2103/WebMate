import axios from 'axios';
import { Question, QuestionData } from '../../../types';
import { API_URL } from '../config';

const postQuestion = async (params: QuestionData): Promise<Question> => {
    const response = await axios(`${API_URL}/questions`, {
        method: 'POST',
        data: params,
    }).catch((error) => error.response);

    return response.data.question ? response.data.question : response.data;
};

export default postQuestion;

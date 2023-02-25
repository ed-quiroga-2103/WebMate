import axios from 'axios';
import { API_URL } from '../config';

const answerQuiz = async (answers, quizId) => {
    const token = localStorage.getItem('mochi');

    const response = await axios(`${API_URL}/quices/${quizId}`, {
        method: 'POST',
        data: { answers },
        headers: {
            authorization: 'Bearer ' + token,
        },
    }).catch((error) => error.response);

    return response.data.result ? response.data.result : response.data;
};

export default answerQuiz;

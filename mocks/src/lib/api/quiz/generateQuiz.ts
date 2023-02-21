import axios from 'axios';
import { API_URL } from '../config';

const generateQuiz = async (courseId) => {
    const response = await axios(
        `${API_URL}/quices?courseId=${courseId}&length=3`,
        {
            method: 'GET',
        }
    ).catch((error) => error.response);

    return response.data.quiz ? response.data.quiz : response.data;
};

export default generateQuiz;

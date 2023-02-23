import axios from 'axios';
import { API_URL } from '../config';

const generateQuiz = async (courseId, type, length = 3) => {
    const response = await axios(
        `${API_URL}/quices?courseId=${courseId}&length=${length}&type=${type}`,
        {
            method: 'GET',
        }
    ).catch((error) => error.response);

    return response.data.quiz ? response.data.quiz : response.data;
};

export default generateQuiz;

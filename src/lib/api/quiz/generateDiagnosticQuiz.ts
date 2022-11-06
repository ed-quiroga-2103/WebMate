import axios from 'axios';
import { API_URL } from '../config';

const generateQuiz = async (
    courseId,
    easyQty = 2,
    intermedQty = 2,
    advancedQty = 2
) => {
    const response = await axios(
        `${API_URL}/quices?courseId=${courseId}` +
            `&easyQty=${easyQty}&intermedQty=${intermedQty}&advancedQty=${advancedQty}` +
            `&type=D`,
        {
            method: 'GET',
        }
    ).catch((error) => error.response);

    return response.data.quiz ? response.data.quiz : response.data;
};

export default generateQuiz;

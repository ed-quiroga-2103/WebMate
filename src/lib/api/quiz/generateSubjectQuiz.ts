import axios from 'axios';
import { API_URL } from '../config';

const generateSubjectQuiz = async (courseId, subjectId) => {
    const response = await axios(
        `${API_URL}/quices?courseId=${courseId}&length=3&subjectId=${subjectId}`,
        {
            method: 'GET',
        }
    ).catch((error) => error.response);

    return response.data.quiz ? response.data.quiz : response.data;
};

export default generateSubjectQuiz;

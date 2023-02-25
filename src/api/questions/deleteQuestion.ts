import axios from 'axios';
import { API_URL } from '../config';

const deleteQuestion = async (id: string): Promise<any> => {
    const response = await axios(`${API_URL}/questions/${id}`, {
        method: 'DELETE',
    }).catch((error) => error.response);

    return response.data;
};

export default deleteQuestion;

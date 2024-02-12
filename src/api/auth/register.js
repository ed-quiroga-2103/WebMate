import { API_URL } from '../config';
import axios from 'axios';

const register = async (params) => {
    const response = await axios(`${API_URL}/auth/register`, {
        method: 'POST',
        data: params,
    }).catch((error) => error.response);


    return response.data;
};

export default register;

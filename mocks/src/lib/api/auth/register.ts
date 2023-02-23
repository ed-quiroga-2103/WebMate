import { RegisterData } from '../../../types/auth';
import { API_URL } from '../config';
import axios from 'axios';

const register = async (params: RegisterData) => {
    const response = await axios(`${API_URL}/auth/login`, {
        method: 'POST',
        data: params,
    }).catch((error) => error.response);

    return response.data;
};

export default register;

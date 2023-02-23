import axios from 'axios';
import { API_URL } from '../config';

const login = async (email, password) => {
    const response = await axios(`${API_URL}/auth/login`, {
        method: 'POST',
        data: {
            email: email,
            password: password,
        },
    }).catch((error) => error.response);

    return response.data;
};

export default login;

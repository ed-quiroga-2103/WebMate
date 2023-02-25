import axios from 'axios';
import { API_URL } from '../config';

const me = async () => {
    const token = localStorage.getItem('token');

    const response = await axios(`${API_URL}/auth/me`, {
        method: 'get',
        headers: {
            authorization: 'Bearer ' + token,
        },
    }).catch((error) => error.response);

    return response.data;
};

export default me;

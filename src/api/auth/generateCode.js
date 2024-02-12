import { API_URL } from '../config';
import axios from 'axios';

const generateCode = async (params) => {
    const token = localStorage.getItem('token');

    const response = await axios(`${API_URL}/auth/registerCode`, {
        method: 'POST',
        data: params,
        headers: {
            authorization: 'Bearer ' + token,
        },
    }).catch((error) => error.response);


    return response;
};

export default generateCode;

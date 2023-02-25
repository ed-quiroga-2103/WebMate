// import fetch from 'node-fetch';
import axios from 'axios';
import { API_URL } from './config';
const test = async () => {
    const response = await axios(`${API_URL}/ping`, {
        method: 'GET',
    });

    return response.data;
};

export default test;

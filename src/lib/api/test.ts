// import fetch from 'node-fetch';
import axios from 'axios';
import { API_URL } from './config';
const test = async () => {
    const options = {
        method: 'GET',
    };

    const response = await axios(`${API_URL}/ping`, {
        method: 'GET',
    });

    console.log(response.data);

    return response.data;
};

export default test;

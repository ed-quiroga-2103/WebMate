import axios from 'axios';
import { API_URL } from '../config';

const getUsers = async (filters) => {
    const response = await axios(`${API_URL}/users`, {
        method: 'GET',
    }).catch((error) => {
        console.log('ERROR', error);
        return error.response;
    });

    console.log(response.data.students);

    return response.data.students ? response.data.students : response.data;
};

export default getUsers;

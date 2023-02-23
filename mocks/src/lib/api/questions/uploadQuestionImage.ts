import axios from 'axios';
import { API_URL } from '../config';

const uploadImage = (file, id) => {
    const formData = new FormData();
    formData.append('upl', file);

    const response = axios({
        method: 'POST',
        url: `${API_URL}/questions/upload?qid=${id}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response;
};
export default uploadImage;

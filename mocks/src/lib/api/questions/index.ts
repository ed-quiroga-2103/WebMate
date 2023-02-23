import getQuestionById from './getQuestionById';
import getQuestions from './getQuestions';
import postQuestion from './postQuestion';
import deleteQuestion from './deleteQuestion';
import uploadQuestionImage from './uploadQuestionImage';

export default {
    get: getQuestions,
    find: getQuestionById,
    post: postQuestion,
    delete: deleteQuestion,
    upload: uploadQuestionImage,
};

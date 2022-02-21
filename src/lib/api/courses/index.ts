import getCourses from './getCourses';
import getCourseById from './getCourseById';
import postCourse from './postCourse';

export default {
    get: getCourses,
    find: getCourseById,
    post: postCourse,
};

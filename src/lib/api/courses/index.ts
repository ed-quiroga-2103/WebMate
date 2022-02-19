import getCourses from './getCourses';
import getCourseByCode from './getCourseByCode';
import postCourse from './postCourse';

export default {
    get: getCourses,
    find: getCourseByCode,
    post: postCourse,
};

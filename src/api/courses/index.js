import getCourses from './getCourses';
import getCourseById from './getCourseById';
// import postCourse from './postCourse';

const courses = {
    get: getCourses,
    getBy: {
        id: getCourseById,
    },
};

export default courses;

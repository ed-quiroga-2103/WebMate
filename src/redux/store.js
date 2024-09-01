import { configureStore } from '@reduxjs/toolkit';

import user from './isAdmin';
import content from './content'

export default configureStore({
    reducer: {
        user,
        content
    },
});

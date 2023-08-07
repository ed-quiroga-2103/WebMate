import { configureStore } from '@reduxjs/toolkit';

import user from './isAdmin';

export default configureStore({
    reducer: {
        user,
    },
});

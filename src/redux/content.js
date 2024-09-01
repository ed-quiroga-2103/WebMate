import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        value: undefined,
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { set } = contentSlice.actions;

export default contentSlice.reducer;

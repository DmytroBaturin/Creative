import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setCursor: (state, action) => {
            state.value = action.payload.value;
        },
    },
});

export const { setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
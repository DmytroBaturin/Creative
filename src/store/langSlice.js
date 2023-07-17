import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.value = action.payload.value;
        },
    },
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
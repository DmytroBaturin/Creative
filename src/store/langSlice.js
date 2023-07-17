import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    complete: false,
};

export const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.value = action.payload.value;
        },
        setComplete: (state, action) => {
            state.complete = action.payload.complete
        }
    },
});

export const { setLanguage, setComplete } = langSlice.actions;

export default langSlice.reducer;
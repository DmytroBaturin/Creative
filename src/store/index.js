import {configureStore} from "@reduxjs/toolkit";
import {langSlice} from "./langSlice.js";
import {cursorSlice} from "./cursorSlice.js";

export const store = configureStore({
    reducer: {
        language: langSlice.reducer,
        cursor: cursorSlice.reducer
    },
});

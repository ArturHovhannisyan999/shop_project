import {configureStore} from "@reduxjs/toolkit";
import {MenuReducer} from "./MenuSlicer";

export const store = configureStore({
    reducer: {
        menu: MenuReducer
    }
})
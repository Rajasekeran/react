import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Slices/CustomerSlices"

export const store = configureStore({
    devTools : true,
    reducer:{
        customer: customerReducer
    }
})
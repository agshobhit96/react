import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Creating our   store
const appStore = configureStore(
    {
        // Reducers
        reducer: {
            cart: cartReducer,
        },
    }
);

export default appStore;
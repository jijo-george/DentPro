import authSlice from "../features/auth/store/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        auth: authSlice,
    }
});
export default store;


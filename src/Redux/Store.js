import { configureStore } from "@reduxjs/toolkit";
import Authslice from './Auth.js';

// Check if there's a token in localStorage
const token = localStorage.getItem('token');

const initialState = {
    user:  token ? { token } : null,
    isAuthenticated: !!token,
};

const Store = configureStore({
    reducer: {
        auth: Authslice,
    },
    preloadedState: {
        auth: initialState,
    },
});

export default Store;

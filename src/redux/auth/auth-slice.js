import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    isRefreshing: false,
    isModalLogoutOpen: false,
    error: null,
    size: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export const {

} = authSlice.actions;

export default authSlice.reducer;
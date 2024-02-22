import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        value: false
    },
    reducers:{
        // Define your methods to update the state values
        login(state) {
            state.value = true;
        },
        logout(state) {
            state.value = false;
        },
    }
});

export default AuthSlice.reducer;

export const AuthAction = AuthSlice.actions;

import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: JSON.parse(localStorage.getItem('auth')) || {},

    reducers: {

        login: (state, action) => {
            state.nif = action.payload.nif;
            state.name = action.payload.name;
            state.email = action.payload.email;

            localStorage.setItem('auth', JSON.stringify(state))
        },

        logOut: (state, action) => {
            state = action.payload
            localStorage.removeItem('auth')
        }
    }
})

export const { login, logOut } = authSlice.actions

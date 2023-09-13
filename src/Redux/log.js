import {createSlice} from '@reduxjs/toolkit'

export const logSlice = createSlice({
    name: 'log',
    initialState: {
        details: false,
        name_of_user: ''
    },
    reducers: {
        login_details: (state, action) => {
            state.details = action.payload.details;
            state.name = action.payload.name_of_user;
        },
    }
})

export const {login_details} = logSlice.actions;

export default logSlice.reducer;
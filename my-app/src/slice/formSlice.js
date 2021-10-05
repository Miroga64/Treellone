import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        name: '',
        email: '',
        password: '',
        surname: '',
        age: '',
        sex: '',
        city: '',
        number: '',
    },
    reducers: {
        setUser: (state, action) => {
            state = action.payload
        },
        signinUser: (state, action) => {
            state.login =  action.payload.login
            state.password =  action.payload.password
        }
    },
});


export const { setUser, signinUser } = slice.actions;

export const selectCount = state => state.user;

export default slice.reducer;

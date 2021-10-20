import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        user:{
            login: '',
            name: '',
            email: '',
            password: '',
            surname: '',
            age: '',
            sex: '',
            city: '',
            number: '',
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        signinUser: (state, action) => {
            state.user.login =  action.payload.login
            state.user.password =  action.payload.password
        }
    },
});


export const { setUser, signinUser } = slice.actions;

export const selectCount = state => state.user;

export default slice.reducer;

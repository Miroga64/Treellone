import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/formSlice'
import skillsReducer from './slice/skillsSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        skills: skillsReducer
    }
});
store.subscribe(() => console.log(store.getState()));
export default store


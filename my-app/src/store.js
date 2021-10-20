import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/formSlice'
import skillsReducer from './slice/skillsSlice'
import modulesReducer from './slice/newModulesSlice';
import courseReducer from './slice/courseSlice';
import textReducer from './slice/textSlice';


const store = configureStore({
    reducer:{
        user: userReducer,
        skills: skillsReducer, 
        modules: modulesReducer,
        course: courseReducer,
        text: textReducer,
    }
});
store.subscribe(() => console.log(store.getState()));
export default store


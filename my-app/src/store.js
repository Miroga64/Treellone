import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/formSlice'
import skillsReducer from './slice/skillsSlice'
import modulesReducer from './slice/newModulesSlice';
import courseReducer from './slice/courseSlice';
import textReducer from './slice/textSlice';
import musicReducer from './slice/musicSlice'


const store = configureStore({
    reducer:{
        user: userReducer,
        skills: skillsReducer, 
        modules: modulesReducer,
        course: courseReducer,
        text: textReducer,
        music: musicReducer,
    }
});
store.subscribe(() => console.log(store.getState()));
export default store


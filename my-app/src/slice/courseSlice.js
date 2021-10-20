import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'course',
    initialState: {
        course:{},
        isActive: false,
    },
    reducers: {
        setCourse: (state, action) => {
            state.course = action.payload
        },
        setActive: (state, action) => {
            state.isActive = action.payload
        }
    },
});

export const { setCourse, setActive } = slice.actions;

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(setCourse(amount));
        dispatch(setActive(true))
    }, 2000);
};




export const selectCourse = state => state.course.course;
export const selectCourseActive = state => state.course.isActive;


export default slice.reducer;

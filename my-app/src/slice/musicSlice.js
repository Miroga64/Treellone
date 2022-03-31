import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'music',
    initialState: {
        music:[
            {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/%D0%9B%D0%95%D0%9D%D0%A2%D0%90_%D0%BB%D0%BE%D0%B3%D0%BE.jpg',
                name: 'Butterfly',
                isLearned: false,
                startTime: '00:00',
                fullTime: '03:22',
                id: 10078
            },
            {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/%D0%9B%D0%95%D0%9D%D0%A2%D0%90_%D0%BB%D0%BE%D0%B3%D0%BE.jpg',
                name: 'Supermassive',
                isLearned: true,
                startTime: '02:00',
                fullTime: '03:22',
                id: 10077
            },
            {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/%D0%9B%D0%95%D0%9D%D0%A2%D0%90_%D0%BB%D0%BE%D0%B3%D0%BE.jpg',
                name: 'Time is Runnig Out',
                isLearned: false,
                startTime: '01:12',
                fullTime: '03:22',
                id: 10076
            }
        ],
    },
    reducers: {
        setMusic: (state, action) => {
            state.music = action.payload
        },
        setTime: (state, action) => {
            state.music[action.payload.index].startTime = action.payload.time
        }
    },
});

export const { setMusic, setTime, setId } = slice.actions;
export const selectMusic = state => state.music.music;


export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'modules',
    initialState: {
        newModules:[
            {id: '10040', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10041', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10042', category:'Другое', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10043', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10044', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10050', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10051', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
            {id: '10052', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: false, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '4', fullLesson: '20'},
        ],
        oldModules:[
            {id: '10048', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: true, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '20', fullLesson: '20'},
            {id: '10045', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: true, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '20', fullLesson: '20'},
            {id: '10046', category:'Другое', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: true, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '20', fullLesson: '20'},
            {id: '10047', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: true, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '20', fullLesson: '20'},
            {id: '10049', category:'Дизайн', sliderIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png', activeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png', disabledIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/768px-Circle-icons-money.svg.png', active: true, hoverText: 'Подавление агрессии в коолективе', complitedLesson: '20', fullLesson: '20'},
        ],
        selectedCell: 0,
        isActive: false,
    },
    reducers: {
        updateModules: (state, action) => {
            state.newModules = action.payload
        },
        setSelectedCell: (state, action) => {
            state.selectedCell = action.payload
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload
        }
    },
});


export const { updateModules, setSelectedCell, setIsActive } = slice.actions;

export const selectNewModules = state => state.modules.newModules;
export const selectedCell = state => state.modules.selectedCell;
export const selectOldModules = state => state.modules.oldModules
export const selectIsActive = state => state.modules.isActive

export default slice.reducer;
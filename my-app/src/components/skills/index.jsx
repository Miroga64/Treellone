import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTable } from '../../slice/skillsSlice'
import { setIsActive, setSelectedCell } from '../../slice/newModulesSlice'

export default function Skills(){
    const matrix = useSelector(selectTable)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch()
    
    const toggleEdit = () => {
        setIsShow(!isShow);
    }

    const ElementClick = (id) => {
        dispatch(setIsActive(true))
        dispatch(setSelectedCell(id))
    }

    return(
        <div className="skills">
            <div className="skills__edit" onClick={toggleEdit}></div>
            <div className="skills__container">
                {Object.entries(matrix).map(([key_id, {id, activeIcon, disabledIcon, active, hoverText, complitedLesson, fullLesson}], i) => {
                    let elementClass="skills__element"
                    let icon = ''

                    if(i === 0){
                        elementClass = elementClass + " big"
                    }
                    if(activeIcon){
                        elementClass = elementClass + " active"
                    }
                    if(isShow){
                        elementClass = elementClass + " show"
                    }

                    if(active && activeIcon){
                        icon = activeIcon
                    }else if(active === false && disabledIcon){
                        icon = disabledIcon
                    }

                    return (
                        <div className={elementClass} onClick={() => {ElementClick(key_id)}}>
                            {id && 
                                <>
                                    <div className="skills__element__cross"></div>
                                    <div className="skills__element__hover">
                                        <div className="skills__element__text">{hoverText ? hoverText : ''}</div>
                                        <div className="skills__element__count">{complitedLesson ? complitedLesson : ''}/{fullLesson ? fullLesson : ''}</div>
                                        <div className="skills__element__checked"></div>
                                    </div>
                                    <div className="skills__element__icon" style={{backgroundImage:`url(${icon})`}}></div>
                                </>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
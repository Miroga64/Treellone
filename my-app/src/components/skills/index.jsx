import { useDispatch, useSelector } from "react-redux";
import { selectTable, setfullTable } from '../../slice/skillsSlice'

export default function Skills(){
    const matrix = useSelector(selectTable)
    const dispatch = useDispatch()
    
    const toggleEdit = () => {
        let obj = {};
        for (let key in matrix) {
            if(matrix.hasOwnProperty(key)) obj[key] = matrix[key];
        }
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                obj[key] = {...obj[key], isShow: !obj[key].isShow}
            }
        }
        console.log(obj)
        dispatch(setfullTable(obj))
    }

    return(
        <div className="skills">
            <div className="skills__edit" onClick={toggleEdit}></div>
            <div className="skills__container">
                {Object.entries(matrix).map(([key_id, {id, activeIcon, disabledIcon, active, hoverText, complitedLesson, fullLesson, isShow}], i) => {
                    let elementClass="skills__element"
                    if(i === 0){
                        elementClass = elementClass + " big"
                    }
                    if(activeIcon){
                        elementClass = elementClass + " active"
                    }
                    if(isShow === true){
                        elementClass = elementClass + " show"
                    }

                    return (
                        <div className={elementClass} data-id={id}>
                            <div className="skills__element__cross">
                            </div>
                            <div className="skills__element__hover">
                                <div className="skills__element__text">{hoverText}</div>
                                <div className="skills__element__count">{complitedLesson}/{fullLesson}</div>
                                <div className="skills__element__checked"></div>
                            </div>
                            <div className="skills__element__icon" style={{backgroundImage:`url(${active ? activeIcon : disabledIcon})`}}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
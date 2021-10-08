import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectNewModules, selectOldModules, selectIsActive, selectedCell, setIsActive} from '../../slice/newModulesSlice'
import { setRow } from '../../slice/skillsSlice'
import SliderWrapper from '../sliderWrrapper';


export default function NewModules(){
    const newModules = useSelector(selectNewModules)
    const oldModules = useSelector(selectOldModules)
    const isActive = useSelector(selectIsActive)
    const cell = useSelector(selectedCell)
    const dispatch = useDispatch()
    console.log(isActive)

    return(
        <>
            {isActive && 
                <div className="add_modules add active">
                    <div className="add_modules__container" id="container2">
                        <div className="add_modules__cross" onClick={() => {dispatch(setIsActive(false))}}></div>
                        <div className="add_modules__title">Новые модули</div>
                        <div className="add_modules__subtitle">Твои купленные модули. Кликни на нужный и он будет добавлен на карту. </div>
                        <SliderWrapper>
                            {newModules.map((el, i) => (
                                <div key={parseInt(el.id)} className="add_modules__element" onClick={() => dispatch(setRow([cell, el]))}>
                                    <div className="add_modules__image" style={{backgroundImage: `url(${el.sliderIcon})`}}></div>
                                    <div className="add_modules__name">{el.hoverText}</div>
                                    <div className="add_modules__categories">{el.category}</div>
                                </div>
                            ))}
                        </SliderWrapper>
                        <div className="add_modules__title">Старые модули</div>
                        <div className="add_modules__subtitle">Модули, которые ты прошел. Модуль исчезает из карты и попадает сюда.</div>
                        <div className="add_modules__slider">
                            {oldModules.map((el) => (
                                <div key={parseInt(el.id)} className="add_modules__element" onClick={() => dispatch(setRow(el))}>
                                    <div className="add_modules__image" style={{backgroundImage: `url(${el.sliderIcon})`}}></div>
                                    <div className="add_modules__name">{el.hoverText}</div>
                                    <div className="add_modules__categories">{el.category}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="add_modules__bg"></div>
                </div>
            }  
        </>   
    )
}
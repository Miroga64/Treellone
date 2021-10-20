
import { selectCourse, selectCourseActive, setActive } from '../../slice/courseSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function Course(props){
    const course = useSelector(selectCourse)
    const active = useSelector(selectCourseActive)
    const dispatch = useDispatch()
    console.log(active)

    return(
        <>
            {
                active &&
                <div className="add_modules menu active">
                    <div className="add_modules__container">
                        <div className="add_modules__cross" onClick={() => {dispatch(setActive(false))}}></div>
                        <div className="add_modules__title">{course.name}</div>
                        <ul>
                            {course.lessons.map(el => (
                                <li className={el.isComplite ? 'active' : ''}>
                                    <a>{el.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="add_modules__bg"></div>
                </div>
            }
        </>
    )
}

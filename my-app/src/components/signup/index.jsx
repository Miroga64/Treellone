import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from '../../slice/formSlice'
import Input from '../input'
import { NavLink } from 'react-router-dom'


export default function Signup(){
    const dispatch = useDispatch();

    const [inputValues, setInputValues] = useState({
        login: {
            value: '', 
            type: 'text', 
            placeholder: 'Логин',
            name: 'login',
        }, 
        name: {
            value: '', 
            type: 'text', 
            placeholder: 'Имя',
            name: 'name',
        }, 
        email: {
            value: '', 
            type: 'text', 
            placeholder: 'Почта',
            name: 'email',
        }, 
        password: {
            value: '', 
            type: 'password', 
            placeholder: 'password',
            name: 'password',
        }, 
        repeatPass: {
            value: '', 
            type: 'password', 
            placeholder: 'repeatPass',
            name: 'repeatPass',
        }, 
        surName: {
            value: '', 
            type: 'surName', 
            placeholder: 'surName',
            name: 'surName',
        }, 
        age: {
            value: '', 
            type: 'age', 
            placeholder: 'age',
            name: 'age',
        }, 
        sex: {
            value: '', 
            type: 'text', 
            placeholder: 'sex',
            name: 'sex',
            options: {
                Male: 'Мужской',
                Female: 'Женский',
            }
        }, 
        city: {
            value: '', 
            type: 'city', 
            placeholder: 'city',
            name: 'city',
            options: {
                Ufa: 'Уфа',
                Another: 'Другой',
            }
        }, 
        number: {
            value: '', 
            type: 'number', 
            placeholder: 'number',
            name: 'number',
        },
    });

    const setNewUser = () => {
        const obj = {};
        for(let key in inputValues){
            if(inputValues.hasOwnProperty(key)){
                obj[key] = inputValues[key].value
            }
        }
        dispatch(setUser(obj))
    }

    const inputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: {...inputValues[name], value: value }});
    }

    return(
        <div className="form registration">
            <div className="form__title">Регистрация</div>
            <form >
                {Object.entries(inputValues).map((el, i) => {
                    const inputVal = inputValues[el[0]];
                    return <Input 
                        type={inputVal.type}
                        placeholder={inputVal.placeholder}
                        changeFunc={inputChange}
                        name={el[0]}
                        title={inputVal.name}
                        key={i+inputVal.name}
                        value={inputVal.value}
                        options={inputVal.options ? inputVal.options : null}
                    />
                })}
                <input key="submit" type="submit" value="Зарегистрироваться"/>
                <NavLink to="/signin" className="come_in">
                    Войти
                </NavLink>
            </form>
        </div>
    )
}
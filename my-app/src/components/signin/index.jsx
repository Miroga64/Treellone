import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from '../../slice/formSlice'
import Input from '../input'
import { useHistory } from "react-router-dom";

export default function Signin(){
    const dispatch = useDispatch();
    let history = useHistory();

    const handleClick = () => {
        history.push("/signup");
    }

    const [inputValues, setInputValues] = useState({
        login: {
            value: '', 
            type: 'text', 
            placeholder: 'Логин',
            name: 'login',
        },  
        password: {
            value: '', 
            type: 'password', 
            placeholder: 'password',
            name: 'password',
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
            <div className="form__title">Вход</div>
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
                <input key="submit" type="submit" value="Войти"/>
                <div onClick={handleClick} className="come_in">
                    Регистрация
                </div>
            </form>
        </div>
    )
}
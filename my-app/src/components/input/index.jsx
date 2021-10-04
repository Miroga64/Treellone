import {useState} from 'react'


export default function Input(props){
    const { type, placeholder, changeFunc, name, value, key, title, options } = props
    const [realType, setRealType] = useState(type)
    const [switchClass, setSwitchClass] = useState("form__switcher hidden")

    const switchType = () => {
        if(realType === 'password'){
            setRealType('text')
            setSwitchClass("form__switcher")
        }else{
            setRealType('password')
            setSwitchClass("form__switcher hidden")
        }
    }

    return (
        <label key={key} className="form__label">
            <div className="form__label__title">{title}</div>
            {options 
            ?   <select name={name} value={value} key="sex" onChange={e => changeFunc(e)}>
                    {Object.entries(options).map(el => {
                        return <option value={el[0]}>{el[1]}</option>
                    })}
                </select>
             : <input name={name} type={realType} placeholder={placeholder} value={value} onChange={e => changeFunc(e)}/>
            }
            {type==="password" 
            ?   <div className={switchClass} onClick={switchType}></div>
            :   <div></div>
            }
        </label>
    )
}
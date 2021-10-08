import { useRef } from "react"
import { useState } from "react";
import { useEffect } from "react"
import './sliderWrapper.css'

export default function SliderWrapper(props) {
    const slider = useRef(null)
    const { isDots } = props;
    const [counter, setCounter] = useState(0);
    const [lastElement, setLastElement] = useState()
    const [arrowleft, setArrowLeft] = useState("arrow disabled")
    const [arrowRight, setArrowRight] = useState("arrow disabled")

    useEffect(() => {
        const child = Array.from(slider.current.childNodes)
        child.forEach(element => {
            element.classList.add("slide");
        });
        setLastElement(slider.current.childNodes[0])
    }, [])

    useEffect(() => {
        if(lastElement){
            slider.current.childNodes[0].style.marginLeft = `-${counter * (lastElement.offsetWidth + 40) - 20}px`
            console.log(counter, lastElement)
        }
    }, [counter])

    const changeCounter = (str) => {
        if(str === "left"){
            if(counter > -1) setCounter(counter - 1)
        }else{
            if(counter < (slider.current.childNodes.length - 4)) setCounter(counter + 1)
        }
    }


    return(
        <div className="sliderContainer">
            <div 
                className={arrowleft} 
                onClick={() => changeCounter("left")}
            >asda</div>
            <div className="sliderScroll" ref={slider}>
                {props.children}
            </div>
            <div 
                className={arrowRight}
                onClick={() => changeCounter("right")}
            >asda</div>
        </div>
    )
}
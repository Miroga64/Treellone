import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './scrollWrapper.css'

export default function ScrollWrapper(props){
    const [scrollWrapperClass, setScrollWrapperClass] = useState("scrollWrapper")
    const wrapper = useRef(null)
    const { scrollWidth, setScrollWidth } = props;
    let procent = useRef(0);
  
    useEffect(() => {
        let difference = wrapper.current.offsetHeight - window.innerHeight / 3;
        procent.current = 100 / difference;
        setScrollWrapperClass("scrollWrapper fixed")
    }, [])

    const handleScroll = () => {
        if(procent.current){
            setScrollWidth(procent.current * wrapper.current.scrollTop)
        }
    }
   
    return(
        <div className={scrollWrapperClass}>
            <div className="scrollWrapper__scroll" style={{width: `${scrollWidth}%`}}></div>
            <div className="scrollWrapper__hidden">
                <div className="scrollWrapper__content" ref={wrapper} onScroll={handleScroll}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
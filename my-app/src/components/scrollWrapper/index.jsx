import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './scrollWrapper.css'

export default function ScrollWrapper(props){
    const [scrollWrapperClass, setScrollWrapperClass] = useState("scrollWrapper")
    const wrapper = useRef(null)
    const [scrollWitdh, setScrollWidth] = useState(0)
    let procent = useRef(0);
  
    useEffect(() => {
        let difference = wrapper.current.offsetHeight - window.innerHeight;
        procent.current = 100 / difference;
        setScrollWrapperClass("scrollWrapper fixed")
    }, [])

    const handleScroll = () => {
        if(procent.current){
            console.log(procent.current, wrapper.current.scrollTop)
            setScrollWidth(procent.current * wrapper.current.scrollTop)
        }
    }
   
    return(
        <div className={scrollWrapperClass}>
            <div class="scrollWrapper__scroll" style={{width: `${scrollWitdh}%`}}></div>
            <div class="scrollWrapper__hidden">
                <div class="scrollWrapper__content" ref={wrapper} onScroll={handleScroll}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
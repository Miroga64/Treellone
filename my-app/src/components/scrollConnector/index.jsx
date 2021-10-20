import { useState } from "react"
import ScrollWrapper from "../scrollWrapper"
import TopMenu from "../topMenu"

export default function ScrollConnector(props){
    const [scrollWidth, setScrollWidth] = useState(0)

    return(
        <>
            <ScrollWrapper scrollWidth={scrollWidth} setScrollWidth={setScrollWidth}>
                <TopMenu topScroll={scrollWidth}/>
                {props.children}
            </ScrollWrapper>
        </>
    )
}
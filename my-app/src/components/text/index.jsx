
import { selectCourseContent } from '../../slice/textSlice'
import { useSelector } from 'react-redux'
import Slider from "react-slick";

export default function Text(props){

    const content = useSelector(selectCourseContent)

    const options = {
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        fade: true,
    }

    return(
        <>
            <div className="text__content">
                {Object.entries(content).map(([key_id, el], i) => {
                    if(key_id === "title"){
                        return (
                            <div className="text__title">
                                <div className="text__title__text">
                                    {el}
                                </div>
                                <div className="text__title__menu"></div>
                            </div>
                        )
                    }

                    if(key_id === "banner"){
                        return <div className="text__image" style={{backgroundImage:`url(${el})`}}></div>
                    }

                    if(key_id === "content"){
                        console.log(el)

                        return (
                            <div className="text__content__padding">
                                {el.map((elem, id) => {
                                    switch (elem.type){
                                        case 'text':
                                            console.log(elem.сontent)
                                            return <div key={id.toString()+elem.type} className="text__info">{elem.content}</div>
                                        case 'title':
                                            return <h2 key={id.toString()+elem.type} className="text__subtitle">{elem.content}</h2>
                                        case 'image':
                                            return <img key={id.toString()+elem.type} src={elem.content} alt={elem.content} className="text__img"/>
                                        case 'describtion':
                                            return <div key={id.toString()+elem.type} className="text__describtion">{elem.content}</div>
                                        case 'collection':
                                            return <div key={id.toString()+elem.type} className="text__slider__container">
                                                        <div className="text__slider">
                                                            <Slider {...options}>
                                                                {elem.content.map(picture => (
                                                                        <div className="text__slider__element">
                                                                            <div style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                borderRadius: '12px',
                                                                                backgroundImage:`url(${picture})`
                                                                            }}/>
                                                                        </div>
                                                                    )
                                                                    )
                                                                }
                                                            </Slider>
                                                        </div>
                                                    </div>
                                        default:
                                            return <></>
                                    }
                                })}
                            </div>
                        ) 
                    }
                })}
            </div> 
        </>
    )
}
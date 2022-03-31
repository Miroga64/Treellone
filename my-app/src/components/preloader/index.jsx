import './index.css'
import PreloadImage from './preloader.gif'

export default function Preloader(props){

    return(
        <div className="preloader">
            <div className="preloader__icon" style={{backgroundImage: `url(${PreloadImage})`}}></div>
        </div>
    )
}
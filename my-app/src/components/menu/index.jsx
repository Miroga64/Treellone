import './menu.css'


export default function SideMenu(props){
    const {isModer} = props;
    return(
        <div className="side_menu">
            <div className="side_menu__logo"></div>
            <div className="side_menu__nav">
                <a className="side_menu__element play"></a>
                <a className="side_menu__element magnifire"></a>
                <a className="side_menu__element ring"></a>
                <a className="side_menu__element bell"></a>
                {isModer &&
                    <a className="side_menu__element bell"></a>
                }
            </div>
            <div className="side_menu__avatar" style="background-image:url(./images/side_avatar.svg)"></div>
        </div>
    )
}
    

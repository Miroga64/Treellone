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
            <div className="side_menu__avatar" style={{backgroundImage:`url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png})`}}></div>
        </div>
    )
}
    

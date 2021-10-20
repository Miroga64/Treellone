export default function TopMenu(props){

    let { topScroll } = props
    let pageClass = topScroll < 2 ? "page__fixed" : "page__fixed active"

    return(
        <>
            <div className="page__menu">
                <div className="page__menu__left">
                    <div className="page__menu__element active">
                        <div className="page__menu__element__icon" style={{backgroundImage: `url(./fixed__text.svg)`}}></div>
                        <span>Текст</span>
                    </div>
                    <div className="page__menu__element">
                        <div className="page__menu__element__icon" style={{backgroundImage: `url(./fixed__headphone.svg)`}}></div>
                        <span>Аудио</span>
                    </div>
                    <div className="page__menu__element">
                        <div className="page__menu__element__icon" style={{backgroundImage: `url(./fixed__play.svg)`}}></div>
                        <span>Видео</span>
                    </div>
                </div>
                <div className="page__menu__back">Назад</div>
            </div>
            <div className={pageClass}>
                <div className="page__fixed__left">
                    <div className="page__fixed__menu"></div>
                    <div className="page__fixed__divide">
                        <div className="page__fixed__element active">
                            <div className="page__fixed__element__icon texticon"></div>
                        </div>
                        <div className="page__fixed__element">
                            <div className="page__fixed__element__icon headphone"></div>
                        </div>
                        <div className="page__fixed__element">
                            <div className="page__fixed__element__icon play"></div>
                        </div>
                    </div>
                </div>
                <div className="page__fixed__right">Назад</div>
            </div>
        </>
    )
}
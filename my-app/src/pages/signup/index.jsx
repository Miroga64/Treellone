import Signup from '../../components/signup';
import ScrollWrapper from '../../components/scrollWrapper';

export default function Registration(){
    return(
        <>
            <header className="header">
                <div className="header__logo"></div>
                <div className="header__user"></div>
            </header>
            <div className="main">
                <ScrollWrapper>
                    <Signup/>
                </ScrollWrapper>
            </div>
            <footer className="footer">
                <div className="footer__company">© Treelone</div>
            </footer>
        </>
    )
}
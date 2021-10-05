import Signup from '../../components/signup';

export default function Registration(){
    return(
        <>
            <header className="header">
                <div className="header__logo"></div>
                <div className="header__user"></div>
            </header>
            <div className="main">
                    <Signup/>
            </div>
            <footer className="footer">
                <div className="footer__company">© Treelone</div>
            </footer>
        </>
    )
}
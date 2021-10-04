import Signin from "../../components/signin"

export default function Authentification(){
    return(
        <>
            <header className="header">
                <div className="header__logo"></div>
                <div className="header__user"></div>
            </header>
            <div className="main">
                <Signin/>
            </div>
            <footer className="footer">
                <div className="footer__company">© Treelone</div>
            </footer>
        </>
    )
}
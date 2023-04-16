import "./header.style.css"
import { MenuMobile} from "../../index"

export function Header() {

    return (
        <>
            <MenuMobile/>
            <header className="header">
                <nav className="header__nav">
                    <h1 className="header__logo"><span className="header__logo--span">C</span>arlos Vinícius</h1>
                    <ul className="header__ul">
                        <li className="header__li"><a className="header__li--link" href="/">Início</a></li>
                        <li className="header__li"><a className="header__li--link" href="/">Projetos</a></li>
                        <li className="header__li"><a className="header__li--link" href="/">Sobre mim</a></li>
                        <li className="header__li"><a className="header__li--link" href="/">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

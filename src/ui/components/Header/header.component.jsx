import "./header.style.css"
import { useState } from "react"
import { MenuMobile, menuMobile} from "../../index"

export function Header() {

    const [menuIsVisible, setMenuIsVisible] = useState(false)


    return (
        <>
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
            <header className="header">
                <nav className="header__nav">
                    <h1>Vinicarlosss</h1>
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

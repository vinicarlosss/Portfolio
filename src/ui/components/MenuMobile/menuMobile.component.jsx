import "./menuMobile.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import {WHENMENUISVISIBLE, WHENMENUISVISIBLEFILTER} from "../../../constants/styles"
import { useEffect } from "react"

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    const toggleMode = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    const handlemenuisVisible = (css) =>{
        if(menuIsVisible) return css
    }

    return (
        <>
            <nav className="menuMobile__nav" style={handlemenuisVisible(WHENMENUISVISIBLEFILTER)}>
                <FontAwesomeIcon className="menuMobile__hamburguer-menu--icon" onClick={toggleMode} icon={menuIsVisible ? faTimes : faBars} />
                <ul className="menuMobile__ul" style={handlemenuisVisible(WHENMENUISVISIBLE)}>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Início</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Projetos</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Sobre mim</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Contato</a></li>
                </ul>
            </nav>
        </>
    )
}

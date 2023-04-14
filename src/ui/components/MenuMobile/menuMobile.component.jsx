import "./menuMobile.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { isVisible } from "@testing-library/user-event/dist/utils"

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    const toggleMode = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    const whenMenuIsVisible = {
        opacity: 1,
        display:"flex",
    }

    const whenMenuIsVisibleFilter = {
        backdropFilter: 'blur(3px)'
    }

    return (
        <>
            <nav className="menuMobile__nav" style={menuIsVisible ? whenMenuIsVisibleFilter : null}>
                <FontAwesomeIcon className="menuMobile__hamburguer-menu--icon" onClick={toggleMode} icon={menuIsVisible ? faTimes : faBars} />
                <ul className="menuMobile__ul" style={menuIsVisible ? whenMenuIsVisible:null}>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Início</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Projetos</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Sobre mim</a></li>
                    <li className="menuMobile__li"><a onClick={toggleMode} className="menuMobile__li--link" href="/">Contato</a></li>
                </ul>
            </nav>
        </>
    )
}

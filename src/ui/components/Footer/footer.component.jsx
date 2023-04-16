import "./footer.style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { INSTAGRAM_URL, GITHUB_URL, LINKEDLN_URL, EMAIL_IDENTIFIER } from "../../../constants/index"

export function Footer() {
    return (
        <>
            <footer className="footer">
                <a href={INSTAGRAM_URL} target="_blank"><FontAwesomeIcon className="footer-item-ico" icon={faInstagram} /></a>
                <a href={GITHUB_URL} target="_blank"><FontAwesomeIcon className="footer-item-ico" icon={faGithub} /></a>
                <a href={LINKEDLN_URL} target="_blank"><FontAwesomeIcon className="footer-item-ico" icon={faLinkedinIn} /></a>
                <a href={`mailto:${EMAIL_IDENTIFIER}`}><FontAwesomeIcon className="footer-item-ico" icon={faEnvelope} /></a>
            </footer>
        </>
    )
}
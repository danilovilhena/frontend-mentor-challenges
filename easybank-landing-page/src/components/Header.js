import {useState} from 'react';
import "../styles/Header.scss"
import logo from "../assets/logo.svg"
import closeIcon from "../assets/icon-close.svg"
import hamburgerIcon from "../assets/icon-hamburger.svg"
import Button from "./Button"

const Header = () => {
    const [expanded, setExpanded] = useState(false)
    const clickHandler = () => {setExpanded(!expanded)}

return (
    <header>
        <img src={logo} alt="Easybank"></img>
        <button className="menu-btn" title={expanded ? "Close menu" : "Expand menu"} onClick={clickHandler}>
            <img src={expanded ? closeIcon : hamburgerIcon} alt="" aria-hidden></img>
        </button>
        <nav className={expanded ? "mobile-expanded" : "mobile-retracted"}>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Carrers</a>
        </nav>
        <Button />
    </header>
)}

export default Header
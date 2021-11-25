import "./Introduction.scss"
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import headerImage from "../images/desktop/image-header.png"

const Introduction = () => {

    const clickHandler = () => {
        let previous = document.querySelector('#mobile-menu').ariaExpanded
        document.querySelector('#mobile-menu').ariaExpanded = (previous == 'false')
        document.querySelector('#mobile-menu').ariaHidden = (previous == 'true')
    }

    return (
    <section className="introduction">
        <header>
            <img src={logo} alt="Sunnyside"></img>
            <button title="Toggle menu" className="menu-toggler" onClick={clickHandler} aria-controls="mobile-menu">
                <img src={hamburger} alt="Toggle menu"></img>
            </button>
            <nav>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <button>Contact</button>
            </nav>
        </header>
        <nav id="mobile-menu" aria-expanded="false" aria-hidden="true">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <button>Contact</button>
        </nav>
        <h1>We are creatives</h1>
        <img src={arrowDown} className="arrow" alt="Arrow pointing down"></img>
        <img src={headerImage} className="background" alt="Orange cut in half"></img>
    </section>
    )
}

export default Introduction
import "./Introduction.scss"
import logo from "../images/logo.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import headerImage from "../images/desktop/image-header-2.png"

const Introduction = () => (
    <div className="introduction">
        <header>
        <img src={logo} alt="Sunnyside"></img>
        <nav>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <button>Contact</button>
        </nav>
        </header>
        <h1>We are creatives</h1>
        <img src={arrowDown} className="arrow" alt="Arrow pointing down"></img>
        <img src={headerImage} className="background" alt="Orange cut in half"></img>
    </div>
)

export default Introduction
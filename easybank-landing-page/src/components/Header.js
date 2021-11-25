import "./Header.scss"
import logo from "../assets/logo.svg"
import Button from "./Button"

const Header = () => (
    <header>
        <img src={logo} alt="Easybank"></img>
        <nav>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Carrers</a>
        </nav>
        <Button />
    </header>
)

export default Header
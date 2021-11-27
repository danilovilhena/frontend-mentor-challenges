import "../styles/Introduction.scss"
import Button from "./Button"
import imageCellphones from "../assets/image-mockups.png"

const Introduction = () => (
    <section className="introduction">
        <div className="container">
            <div>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button />
            </div>
        </div>
        <img className="cellphones" src={imageCellphones} alt="Cellphones using Easybank"></img>
    </section>
)

export default Introduction
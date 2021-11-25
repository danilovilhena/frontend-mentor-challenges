import "./DividedSections.scss";
import imageGraphicDesign from "../images/desktop/image-graphic-design.jpg"
import imagePhotography from "../images/desktop/image-photography.jpg"

const DividedSections = () => {
    const sections = [
        {
            title: "Graphic Design",
            description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
            image: imageGraphicDesign
        },
        {
            title: "Photography",
            description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
            image: imagePhotography
        }
    ]
    return (
        <div id="divided">
            {sections.map(el => 
            <section>
                <img src={el.image} alt={el.title}></img>
                <div className="text">
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>
            </section>)}
        </div>
    )
}

export default DividedSections
import "./HorizontalSections.scss"
import imageTransform from "../images/desktop/image-transform.jpg"
import imageStandout from "../images/desktop/image-stand-out.jpg"

const HorizontalSections = () => {
  const sections = [
    {
      title: "Transform your brand",
      description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      image: imageTransform,
      alt: "Egg in a yellow background"
    },
    {
      title: "Stand out to the right audience",
      description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
      image: imageStandout,
      alt: "Red cup in a red background"
    }
  ]

  return (<>
    {sections.map(el => 
      <section className="horizontal-section">
        <div>
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <a href="#"><span>Learn more</span></a>
        </div>
        <img src={el.image} alt={el.alt}></img>
      </section>
    )}
  </>)
}

export default HorizontalSections
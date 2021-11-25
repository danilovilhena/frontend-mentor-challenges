import "./App.scss";
import Introduction from "./components/Introduction";
import HorizontalSections from "./components/HorizontalSections";
import Footer from "./components/Footer";

import image1 from './images/desktop/image-gallery-milkbottles.jpg';
import image2 from './images/desktop/image-gallery-orange.jpg';
import image3 from './images/desktop/image-gallery-cone.jpg';
import image4 from './images/desktop/image-gallery-sugarcubes.jpg';

const App = () => {
  const secondSections = [
    {
      title: "Graphic design",
      description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    },
    {
      title: "Photography",
      description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    }
  ]

  const testimonials = [
    {
      testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      occupation: "Marketing Director",
      image: ""
    },
    {
      testimonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      occupation: "Chief Operating Officer",
      image: ""
    },
    {
      testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      occupation: "Business Owner",
      image: ""
    }
  ]

  return (<>
    <Introduction />
    <main>
      <HorizontalSections />

      <section id="images">
        <img src={image1} alt="Milk bottles in a blue background"></img>
        <img src={image2} alt="Half of an orange on top of a white plate"></img>
        <img src={image3} alt="Icecream cone in a blue background"></img>
        <img src={image4} alt="Sugar cubes stacked in a pink background"></img>
      </section>
      <Footer />
    </main>
  </>);
}

export default App;

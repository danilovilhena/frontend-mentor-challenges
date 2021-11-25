import "./App.scss";
import Introduction from "./components/Introduction";
import HorizontalSections from "./components/HorizontalSections";
import Testimonials from "./components/Testimonials";
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

  return (<>
    <Introduction />
    <main>
      <HorizontalSections />
      <Testimonials />
      <div id="images">
        <img src={image1} alt="Milk bottles in a blue background"></img>
        <img src={image2} alt="Half of an orange on top of a white plate"></img>
        <img src={image3} alt="Icecream cone in a blue background"></img>
        <img src={image4} alt="Sugar cubes stacked in a pink background"></img>
      </div>
      <Footer />
    </main>
  </>);
}

export default App;

import "./App.scss";
import Introduction from "./components/Introduction";
import HorizontalSections from "./components/HorizontalSections";

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
    </main>
  </>);
}

export default App;

import "./Testimonials.scss"
import test1 from '../images/image-emily.jpg'
import test2 from '../images/image-thomas.jpg'
import test3 from '../images/image-jennie.jpg'

const Testimonials = () => {
    const testimonials = [
        {
          testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
          name: "Emily R.",
          job: "Marketing Director",
          image: test1
        },
        {
          testimonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
          name: "Thomas S.",
          job: "Chief Operating Officer",
          image: test2
        },
        {
          testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
          name: "Jennie F.",
          job: "Business Owner",
          image: test3
        }
      ]

    return (<>
        <section id="testimonials">
            <h2>Client Testimonials</h2>
            <div className="grid">
                {testimonials.map(el => 
                <div className="grid-item">
                    <img src={el.image} alt={el.name}></img>
                    <p className="testimonial">{el.testimonial}</p>
                    <h3>{el.name}</h3>
                    <p className="job">{el.job}</p>
                </div>)}
            </div>
        </section>
    </>)
}

export default Testimonials
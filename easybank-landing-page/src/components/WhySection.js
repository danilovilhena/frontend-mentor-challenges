import "../styles/WhySection.scss"
import imageOnline from "../assets/icon-online.svg"
import imageBudgeting from "../assets/icon-budgeting.svg"
import imageOnboarding from "../assets/icon-onboarding.svg"
import imageAPI from "../assets/icon-api.svg"

const WhySection = () => {
    const reasons = [
        {
            title: "Online Banking", 
            description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
            image: imageOnline
        },
        {
            title: "Simple Budgeting", 
            description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
            image: imageBudgeting
        },
        {
            title: "Fast Onboarding", 
            description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
            image: imageOnboarding
        },
        {
            title: "Open API", 
            description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            image: imageAPI
        }
    ]

    return (
    <section className="why-section">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your finances like never before.</p>

        <div className="grid">
            {reasons.map((el, idx) => (
                <div className="grid-item" key={idx}>
                    <img src={el.image} alt={el.title}></img>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                </div>
            ))}
        </div>
    </section>
    )
}

export default WhySection
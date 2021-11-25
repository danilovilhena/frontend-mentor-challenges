import "./LatestArticles.scss"
import image1 from '../assets/image-currency.jpg'
import image2 from '../assets/image-restaurant.jpg'
import image3 from '../assets/image-plane.jpg'
import image4 from '../assets/image-confetti.jpg'

const LatestArticles = () => {
    const articles = [
        {
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
            image: image1
        },
        {
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
            image: image2
        },
        {
            author: "Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
            image: image3
        },
        {
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
            image: image4
        },
    ]

    return (
    <section className="latest-section">
        <h2>Latest Articles</h2>

        <div className="grid">
            {articles.map(el => (
                <div className="grid-item">
                    <img src={el.image} alt={el.title}></img>
                    <div className="grid-content">
                        <p className="author">By {el.author}</p>
                        <h3><a>{el.title}</a></h3>
                        <p>{el.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}

export default LatestArticles
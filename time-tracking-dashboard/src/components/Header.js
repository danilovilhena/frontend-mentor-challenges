import './Header.scss';
import profileImage from '../images/image-jeremy.png'

const Header = (props) => {
    return (
        <header>
            <div className="user-details">
                <img src={profileImage} alt="Jeremy Robson" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>

            <div className="buttons">
                <button>Daily</button>
                <button className="active">Weekly</button>
                <button>Monthly</button>
            </div>
        </header>
    )
}

export default Header
import './Header.scss';
import profileImage from '../images/image-jeremy.png'

const Header = (props) => {
    const clickHandler = (event) => {
        props.setTimeframe(event.target.innerText.toLowerCase())
    }
    
    return (
        <header>
            <div className="user-details">
                <img src={profileImage} alt="Jeremy Robson" />
                <div className="text-details">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>

            <div className="buttons">
                <button onClick={clickHandler} className={props.timeframe === 'daily' ? 'active' : ''}>Daily</button>
                <button onClick={clickHandler} className={props.timeframe === 'weekly' ? 'active' : ''}>Weekly</button>
                <button onClick={clickHandler} className={props.timeframe === 'monthly' ? 'active' : ''}>Monthly</button>
            </div>
        </header>
    )
}

export default Header
import './Block.scss';
import ellipsis from '../images/icon-ellipsis.svg'

const Block = (props) => {
    return (
        <section className="block">
            <div className="highlight" aria-hidden style={{backgroundColor: props.obj.color}}>
                <img src={props.obj.icon} alt=""></img>
            </div>
            <div className="content">
                <div className="title">
                    <h2>{props.obj.title}</h2>
                    <button className="details" title="View more details">
                        <img src={ellipsis} aria-hidden alt=""></img>
                    </button>
                </div>
                <div className="hours-container">
                    <p className="hours">{props.obj.time}</p>
                    <p className="last-hours">{props.obj.last}</p>
                </div>
            </div>
        </section>
    )
}

export default Block;
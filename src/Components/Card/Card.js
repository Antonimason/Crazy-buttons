import "./Card.css"

function Card(props){
    return(
        <div className="card-container">
            <div className="card-logo">{props.logo}</div>
            <div className="card-text-container">
                <h3 className="card-title title">{props.title}</h3>
                <p className="card-paragraph text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
import React from "react";
import star from '../img/star.png';

function Card(props){
    let text 
    if (props.openSpots ===0){
        text = "sold out"
    } else if(props.location === "Online") {
        text = "ONLINE"
    }
    return(
        <div className="card">
            {text && <div className="spot">{text}</div>}
            <img src={props.coverImg} alt="person" className="katie"></img>
            <div className="cardStats">
                <img src={star} alt="star" className="star" ></img>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) ~</span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="price">From ${props.price}  / person</span></p>
        </div>
    )
}

export default Card;
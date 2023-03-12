import React from 'react';
import '../css/Card.css';
const Card = (props) =>{
    return(
        <div class="card">
            <div class="card__image-holder">
                <img class="card__image" src={process.env.PUBLIC_URL + `${props.card.link}`} alt='img'/>
            </div>
                <div class="card-title">
                        <span class="left"></span>
                        <span class="right"></span>
                    <h2>
                        Link
                        <small>Share the link with your friends</small>
                    </h2>
                </div>
        </div>
    )
}

export default Card;
import React from 'react'
import * as cardStyles from "./card.modules.css"

const Card = props=> {
    <div className= {cardsStyles.Card}> 
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
}
export default Card 
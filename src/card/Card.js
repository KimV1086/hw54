import React from 'react';

const suits = {
    H: {className :'hearts', symbol : '♥'},
    C: {className :'clubs', symbol : '♣'},
    D: {className :'diams', symbol : '♦'},
    S: {className :'spades', symbol : '♠'},
};
const Card = (props) => {

    const classes = suits[props.suit].className;
    const symbol =  suits[props.suit].symbol;
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${classes}`;
    return (
        <div className={cardClasses}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{symbol}</span>
        </div>
    )
};
export default Card;
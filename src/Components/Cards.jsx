import React from 'react';
import './Cards.css'
const cardStyle={
    position: 'relative',
    textAlign: 'center',
    color: 'white',
}
const textStyle={
    position: 'absolute',
    bottom: '8px',
    left:'30%',
    textShadow:'0 0 5px black'
}
const Cards = (props) => {
return (
        <div className="cards" style={cardStyle}>
            <img src={props.url} alt="{props.name}" className='product--image'/>
            <h5 style={textStyle} className='text-center'>{props.name}</h5>
        </div>
    );
};

export default Cards;

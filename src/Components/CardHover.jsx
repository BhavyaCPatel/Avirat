import React from 'react'
import './CardHover.css'

const CardHover = (props) => {
    return (
        <div className='my-5'>
        
        <div className = "card-item mx-4 my-5">
            <img src={props.img} alt=""/>
            <div className="card-content">
                <h2>{props.name}</h2>
                <p>
                    <span className="my-3">{props.duration}</span><br/>
                    <span>{props.rating}</span><br/>
                    <span>{props.price}</span><br/>
                </p>
                <button className="btn btn-outline-light">
                    Find out more
                </button>
            </div>
        </div>
        </div>
    )
}

export default CardHover
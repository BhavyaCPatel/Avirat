import React from 'react'
import './CardHover.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

const CardHover = (props) => {
    return (
        <div className = "card-item mx-4 my-3">
            <img src={props.img} alt=""/>
            <div className="card-content">
                <h2>{props.name}</h2>
                <p>
                    <span className="my-3"><AiOutlineClockCircle/>&nbsp;{props.duration}</span><br/>
                    <span><AiFillStar/>&nbsp;{props.rating}</span><br/>
                    <span><LiaRupeeSignSolid/>&nbsp;{props.price}</span><br/>
                </p>
                <button className="btn btn-outline-light">
                    Find out more<BsArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default CardHover
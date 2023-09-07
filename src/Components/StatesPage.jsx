import React from 'react';
import { useParams } from 'react-router-dom';
import {statesData} from '../data'
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";

const StatesPage = () => {
    const { Cname } = useParams();
    const statesForCountry = statesData.filter(
    (state) => state.Cname === Cname
    );

    return (
        <div>
            <div className="mx-4">
                {statesForCountry.map((state, index) => (
                    <div className="card p-2 my-5 mx-auto" key={index} style={{width:"70%"}}>
                        <div className="card-title title">
                            <h1 className="mx-2">{index+1}.&nbsp;<u>{state.title}</u></h1>
                        </div>
                        <img src={state.img} className="mx-auto d-block" alt='' width="80%"  height="400px"/>
                        <div className="card-body">
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-sm">
                                        <p className="mt-2" style={{fontSize:'2em'}}><AiOutlineClockCircle/>&nbsp;{state.duration}</p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="mt-3"style={{fontSize:'1.5em'}}><span className='border border-warning text-light rounded bg-warning px-3 py-2'><AiFillStar/>&nbsp;{state.rating}/5</span></p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="mt-2 text-secondary display-6" style={{fontSize:'1.45em'}}><LiaRupeeSignSolid/>{state.price}  &nbsp;per adult</p>
                                    </div>
                                </div>
                            </div><hr/>
                            <h4><u>About this Destination:</u></h4>
                            <p className="card-text">{state.about}</p>
                            <button className="btn btn-warning">Send Inquiry</button>
                        </div>
                    </div>
                ))}
            </div><br /><br />
        </div>
    );
};  

export default StatesPage;

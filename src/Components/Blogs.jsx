import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const Blogs = () => {
    return (
        <div>
            <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Latest Travel Trends</h1></u>
            <div className="container mt-4" >
                <div className="row">
                    <div className="col-md-4">
                        <div className="list-group list-group-flush">
                            <div  className="list-group-item list-group-item-action d-flex align-items-center my-4" style={{backgroundColor:'transparent'}}>
                                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Blog 1" className="img-fluid me-3" style={{maxWidth:'100px'}}/>
                                <h6 className="mt-2" style={{color: '#80ed99ff'}}>Mastering Flight Booking: Your Ticket to Adventure</h6>
                            </div>
                            <div  className="list-group-item list-group-item-action d-flex align-items-center my-4"style={{backgroundColor:'transparent'}}>
                                <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Blog 2" className="img-fluid me-3" style={{maxWidth:'100px'}}/>
                                <h6 className="mt-2"style={{color: '#80ed99ff'}}>Traveling with Friends: Creating Unforgettable Memories Together</h6>
                            </div>
                            <div  className="list-group-item list-group-item-action d-flex align-items-center my-4"style={{backgroundColor:'transparent'}}>
                                <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Blog 3" className="img-fluid me-3" style={{maxWidth:'100px'}}/>
                                <h6 className="mt-2"style={{color: '#80ed99ff'}}>Effortless Travel Planning: Your Guide to Seamless Adventures</h6>
                            </div>
                            <div  className="list-group-item list-group-item-action d-flex align-items-center my-4"style={{backgroundColor:'transparent'}}>
                                <img src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Blog 4" className="img-fluid me-3" style={{maxWidth:'100px'}}/>
                                <h6 className="mt-2"style={{color: '#80ed99ff'}}>Trekking Adventures: Exploring the Uncharted Wilderness</h6>
                            </div>
                        </div>
                        <button className='btn btn-outline-info float-end'>See All Articles<BsArrowRight/></button>
                    </div>
                    <div className="col-md-8">
                        <div className="card border-0" style={{backgroundColor:'transparent'}}>
                            <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Main Blog" className="card-img-top"/>
                            <div className="card-body">
                                <h2 className="card-title"style={{color: '#80ed99ff'}}> Wanderlust Chronicles: Exploring the World, One Adventure at a Time</h2>
                                <p className="card-text"style={{color: ' #38a3a5ff'}}>
                                Travel opens the door to a world of wonder, cultural richness, and unforgettable experiences. In this blog post, we'll embark on a virtual journey to the most breathtaking destinations, sharing travel guides, tips, and inspiring tales of exploration....
                                </p>
                            </div>
                        </div>
                        <button className='btn btn-outline-info float-end'>Read Full Article<BsArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
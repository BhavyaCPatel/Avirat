import './header.css'
import { FaSistrix } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { GiCommercialAirplane } from 'react-icons/gi';
import { GiReceiveMoney } from 'react-icons/gi';
import logo from './Assets/avirat-logo-removebg.png'
import banner from './Assets/homepage-banner.jpg'
import { Link } from 'react-router-dom';
import Login from './Login'
import SendInquiry from './SendInquiry'

function header() {
  return (
    <div className='background' style={{backgroundImage:`url(${banner})`}}>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div>
            <Link to={'/'}>
                <img src={logo} alt="Logo" className='logo'/>
            </Link>
        </div>
        <div className="container-fluid">
            <button type="button" className="navbar-toggler btn btn-lg btn-outline-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="d-flex" role="search">
                    <input type="search" className="form-control me-2 btn-lg btn-outline-light" placeholder="Search"/>&nbsp;
                    <button type="submit" className="btn text-light"><FaSistrix/></button>
            </form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-center mb-2 mb-lg-0">
                    <li className="nav-item">
                        <SendInquiry/>
                    </li><div style={{"width":"2px"}}></div>
                    <li className="nav-item">
                    <Login/>
                    </li><div style={{"width":"2px"}}></div>
                </ul>
            </div>
        </div>
    </nav>
    <div className="caption">
        <h1>It's time for new</h1>
        <section className="animation">
            <div className="first"><div>Adventure</div></div>
            <div className="second"><div>Escape</div></div>
            <div className="third"><div>Thrill</div></div>
        </section>
    </div>
    <div className="stats d-flex text-center container-fluid">
        <h2 className='text-center'><GiCommercialAirplane/>&nbsp;<span>50000+ Travel Experiences</span></h2>
        <h2 className='text-center'><BsGlobeCentralSouthAsia/>&nbsp;<span>60+ Countries</span></h2>
        <h2 className='text-center'><GiReceiveMoney/>&nbsp;<span>Best Price Guaranteed</span></h2>
        <h2 className='text-center'><FaUsers/>&nbsp;<span>80 Million+ Users Per Year</span></h2>
    </div>
    </div>
);
}

export default header;
import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import logo from './Assets/avirat-logo-removebg.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div><div className="footer">
    <div className="company">
        <h3><u>Company</u></h3>
        <span href="#">About Us</span><br/>
        <span href="#">Contact Us</span><br/>
        <span href="#">Our Services</span><br/>
        <span href="#">Privacy Policy</span><br/>
    </div>
    <div className="help">
        <h3><u>Get Help</u></h3>
        <span href="#">FAQ</span><br/>
        <span href="#">Reviews</span><br/>
        <span href="#">Cancelation</span><br/>
    </div>
    <div className="contact">
        <h3><u>Connect With us</u></h3>
        <span><BsFacebook className='ms-3'/></span>
        <span><BsInstagram className='ms-3'/></span>
        <span><BsTwitter className='ms-3'/></span>
        <h4 className='text-center my-3'>Avirat</h4>
        <Link to={'/'}>
                <img src={logo} alt="Logo" className='logo'/>
        </Link>
        <br/>
        
    </div>
</div>
</div>
  )
}

export default Footer
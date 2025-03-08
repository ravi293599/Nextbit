import React from 'react'
import logo from '../assets/logo-2.png'
import { FaPaperPlane,FaPhoneAlt,FaEnvelope,FaClock } from "react-icons/fa";
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Mainpopup = (props) => {
  const closeHandler = () =>{
    props.show == false;
    alert("close fn called")
  }
  return (
    <>
    <div className={!props.show ? "overlay" : "overlay active"}>
    </div>
    <div className={!props.show ? "main-popup" : "main-popup active"}>
        <div className="main-popup-content">
        <div className='popup-header'>
            <div className='close-btn' onClick={() => props.close()}>
            <IoCloseSharp />
            </div>
            <div className='logo'>
                <a href='#'>
                <img alt='logo' width= "" src={logo} />
                </a>
            </div>
            <h2>About Us</h2>
            <p>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
            <button className='btn btn-primary magic-btn'><span>consultation</span></button>
        </div>
        <div className='popup-footer'>
            <h2>Contact Info</h2>
            <ul>
                <li>
                <FaPaperPlane />
                Chicago 12, Melborne City, USA
                </li>
                <li>
                <FaPhoneAlt />
                (111) 111-111-1111
                </li>
                <li>
                <FaEnvelope />
                nextbit@gmail.com
                </li>
                <li>
                <FaClock />
                Week Days: 09.00 to 18.00 Sunday: Closed
                </li>
            </ul>
            <div className='social-media'>
                <ul>
                  <li>
                    <a href='#'>
                    <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
            </div>
        </div>
        </div>
      </div></>
  )
}

export default Mainpopup

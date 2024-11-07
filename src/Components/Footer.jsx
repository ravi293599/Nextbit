import React from 'react'
import logo from "../assets/footer-logo.png"
import phone from "../assets/icon-1.png"
import email from "../assets/icon-2.png"
import map from "../assets/icon-3.png"
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    let date = new Date().getFullYear();
  return (
    <footer>
        <div className='auto-container'>
            <div className='footer-container'>
                <div className='row'>
                    <div className='col'>
                    <a href='#'>
                    <img alt="logo" width="" src={logo} />
                    </a>
                    </div>
                </div>
                <div className='row contact-details'>
                    <ul>
                        <li>
                            <span className='contact-img'>
                                <img alt="telephone" width="" src={phone} />
                            </span>
                            <span className='contact-content'>
                            <a href='tel:+3453-909-6565'>+3453-909-6565</a>
                            <a href='tel:+2390-875-223'>+2390-875-223</a>
                            </span>
                        </li>
                        <li>
                            <span className='contact-img'>
                                <img alt="telephone" width="" src={email} />
                            </span>
                            <span className='contact-content'>
                            <a href='mailto:infoname@gmail.com'>infoname@gmail.com</a>
                            <a href='www.yourname.com'>www.yourname.com</a>
                            </span>
                        </li>
                        <li>
                            <span className='contact-img'>
                                <img alt="telephone" width="" src={map} />
                            </span>
                            <span className='contact-content'>
                            <p>503 Old Buffalo Street</p>
                            <p>Northwest #205, New York-3087</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='row social-media'>
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
        <div className='bottom-footer'>
            <div className='auto-container'>
                <div className='row copyright'>
                    <p>© {date} Your Company. All Rights Reserved. Designed By <a href='#'>Ravi Sharma</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
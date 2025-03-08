import React from 'react';
import { FaCheck } from "react-icons/fa";
import card1 from "../assets/service-1.svg"
import card2 from "../assets/service-2.svg"
import card3 from "../assets/service-3.svg"

const Pricing = () => {
  return (
    <div className='Pricing-wrapper'>
      <div className='auto-container full-width'>
        <div className='row Pricing'>
            <div className='col'>
                <p className='sub-heading-child'>Pricing Plan</p>
                <h2 className='sub-title'>Choose your plan</h2>
            </div>
            <div className='col price-card-wrapper'>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='icon-list'>
                            <li><img alt='service' width="" src={card1} /></li>
                        </ul>
                        <h3>Only Internet</h3>
                        <h4>$55.00 / Month</h4>
                    </div>
                    <div className='card-body'>
                        <ul className='price-list'>
                            <li><FaCheck /> Internet with a 100Mbps</li>
                            <li><FaCheck /> Connect multiple users</li>
                            <li><FaCheck /> WiFi router & prevention</li>
                            <li><FaCheck /> Unlimited devices</li>
                        </ul>
                        <button className='btn btn-primary btn-main magic-btn'><span>Get Started</span></button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='icon-list'>
                            <li><img alt='service' width="" src={card2} /></li>
                        </ul>
                        <h3>Only TV</h3>
                        <h4>$45.00 / Month</h4>
                    </div>
                    <div className='card-body'>
                        <ul className='price-list'>
                            <li><FaCheck /> Internet with a 100Mbps</li>
                            <li><FaCheck /> Connect multiple users</li>
                            <li><FaCheck /> WiFi router & prevention</li>
                            <li><FaCheck /> Unlimited devices</li>
                        </ul>
                        <button className='btn btn-primary btn-main magic-btn'><span>Get Started</span></button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='icon-list'>
                            <li><img alt='service' width="" src={card3} /></li>
                        </ul>
                        <h3>Only Home Phone</h3>
                        <h4>$35.00 / Month</h4>
                    </div>
                    <div className='card-body'>
                        <ul className='price-list'>
                            <li><FaCheck /> Internet with a 100Mbps</li>
                            <li><FaCheck /> Connect multiple users</li>
                            <li><FaCheck /> WiFi router & prevention</li>
                            <li><FaCheck /> Unlimited devices</li>
                        </ul>
                        <button className='btn btn-primary btn-main magic-btn'><span>Get Started</span></button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='icon-list'>
                            <li><img alt='service' width="" src={card1} /></li>
                            <li><img alt='service' width="" src={card2} /></li>
                            <li><img alt='service' width="" src={card3} /></li>
                        </ul>
                        <h3>Internet + TV + Phone</h3>
                        <h4>$85.00 / Month</h4>
                    </div>
                    <div className='card-body'>
                        <ul className='price-list'>
                            <li><FaCheck /> Internet with a 100Mbps</li>
                            <li><FaCheck /> Connect multiple users</li>
                            <li><FaCheck /> WiFi router & prevention</li>
                            <li><FaCheck /> Unlimited devices</li>
                        </ul>
                        <button className='btn btn-primary btn-main magic-btn'><span>Get Started</span></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

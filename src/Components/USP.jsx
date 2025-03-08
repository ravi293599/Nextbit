import React from 'react'
import card1 from "../assets/service-1.svg"
import card2 from "../assets/service-2.svg"
import card3 from "../assets/service-3.svg"
import client from "../assets/service-1.png"
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const USP = () => {
  // const image = document.querySelector(".img-wrapper");

  // image.addEventListener("mousemove", event => {
  //   const { top, bottom, left, right } = event.target.getBoundingClientRect();

  //   const middleX = (right - left) / 2;
  //   const middleY = (bottom - top) / 2;

  //   const clientX = event.clientX;
  //   const clientY = event.clientY;

  //   const offsetX = (clientX - middleX) / middleX;
  //   const offsetY = (middleY - clientY) / middleY;

  //   event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
  //     5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
  // });
  return (
    <div className='USP-wrapper'>
      <div className='auto-container'>
        <div className='row card-wrapper'>
            <div className='USP-section'>
                <div className='card'>
                    <h3>Broadband</h3>
                    <p>
                    Lorem ipsum dolor sit amet them consec tetura dipiscing elit sed doeiumod Donec modern solution quam felis.
                    </p>
                    <img alt='broadband' width="" src={card1} />
                    <a href='#' className='card-btn'>Get Broadband Service <GoArrowRight /></a>
                </div>
                <div className='card'>
                    <h3>Satelite TV</h3>
                    <p>
                    Lorem ipsum dolor sit amet them consec tetura dipiscing elit sed doeiumod Donec modern solution quam felis.
                    </p>
                    <img alt='broadband' width="" src={card2} />
                    <a href='#' className='card-btn'>Get Broadband Service <GoArrowRight /></a>
                </div>
                <div className='card'>
                    <h3>Home Phone</h3>
                    <p>
                    Lorem ipsum dolor sit amet them consec tetura dipiscing elit sed doeiumod Donec modern solution quam felis.
                    </p>
                    <img alt='broadband' width="" src={card3} />
                    <a href='#' className='card-btn'>Get Broadband Service <GoArrowRight /></a>
                </div>
            </div>
            <div className='who-are-we'>
                <div className='col w-50'>
                    <div className='img-wrapper'>
                      <div className='img-sec'>
                        <img alt='our client' width="" src={client} />
                      </div>
                    </div>
                </div>
                <div className='col w-50 content-sec'>
                    <p className='sub-heading-child'>who we are</p>
                    <h2 className='sub-title'>Get TV service with your internet service</h2>
                    <p className='big-para'>
                    Business is the activity of making one's living or making money by producing or buying and selling products
                    </p>
                    <p className='para'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes.Aene an massa.
                    </p>
                    <button className='btn btn-primary btn-main magic-btn'><span>Read More <IoIosArrowRoundForward /></span></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default USP

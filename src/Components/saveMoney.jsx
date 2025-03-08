import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const saveMoney = () => {
  return (
    <div className='save-wrapper'>
      <div className='auto-container'>
        <div className='row'>
            <div className='col w-50'></div>
            <div className='col w-50 content-box'>
                <h2 className='sub-title'>
                Save money by bundling your internet service with TV service.
                </h2>
                <p className='para'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes.Aene an massa.
                </p>
                <p className='sub-heading-child'>$25/ per month</p>
                <button className='btn btn-primary btn-main magic-btn'><span>Read More <IoIosArrowRoundForward /></span></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default saveMoney

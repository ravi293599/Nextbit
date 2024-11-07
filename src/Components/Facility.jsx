import React from 'react'
import facility from "../assets/facility.png"
import { GiWireframeGlobe } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Facility = () => {
  return (
    <div className='facility-wrapper'>
        <div className='auto-container full-width'>
            <div className='row mb-2'>
                <div className='col w-50'>
                    <p className='sub-heading-child'>our facility</p>
                    <h2 className='sub-title'>Few great reasons make you choice us</h2>
                </div>
                <div className='col w-50'>
                    <p className='para'>
                    Business is the activity of making one's living or making money by producing cumsociis natoque penatibus et magnis dis partu rient to montes. Aene an massa. cumsociis natoque penatibus.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col w-50'>
                    <div className='facility-card-wrapper'>
                        <div className='card'>
                            <div className='pattern-texture'></div>
                            <div className='icon-img'>
                                <GiWireframeGlobe />
                            </div>
                            <h4 className='card-title'><a href='#'>Free Installation</a></h4>
                            <p className='para'>
                            Lorem ipsum dolor sit amet them consec tetur elit sed do eiumod. Donec quam felis ies nec.
                            </p>
                        </div>
                        <div className='card'>
                            <div className='pattern-texture'></div>
                            <div className='icon-img'>
                                <FaWifi />
                            </div>
                            <h4 className='card-title'><a href='#'>Ultrafast Connect</a></h4>
                            <p className='para'>
                            Lorem ipsum dolor sit amet them consec tetur elit sed do eiumod. Donec quam felis ies nec.
                            </p>
                        </div>
                        <div className='card'>
                            <div className='pattern-texture'></div>
                            <div className='icon-img'>
                                <MdOutlineHighQuality />
                            </div>
                            <h4 className='card-title'><a href='#'>4K and 8K Quality</a></h4>
                            <p className='para'>
                            Lorem ipsum dolor sit amet them consec tetur elit sed do eiumod. Donec quam felis ies nec.
                            </p>
                        </div>
                        <div className='card'>
                            <div className='pattern-texture'></div>
                            <div className='icon-img'>
                            <RiCustomerService2Fill />
                            </div>
                            <h4 className='card-title'><a href='#'>Fast Support 24/7</a></h4>
                            <p className='para'>
                            Lorem ipsum dolor sit amet them consec tetur elit sed do eiumod. Donec quam felis ies nec.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col w-50'>
                    <div className='facility-image'>
                        <img alt='facility' width="" src={facility} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facility
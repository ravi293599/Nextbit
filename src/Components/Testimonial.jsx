import React from 'react'
import author1 from "../assets/author-1.jpg"
import author2 from "../assets/author-2.jpg"
import author3 from "../assets/author-3.jpg"
import ch1 from "../assets/1.png"
import ch2 from "../assets/2.png"
import ch3 from "../assets/3.png"
import ch4 from "../assets/4.png"
import ch5 from "../assets/5.png"
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='testimonial-wrapper'>
      <div className='auto-container'>
        <div className='row'>
            <div className='col header'>
                <p className='sub-heading-child'>Testimonial</p>
                <h2 className='sub-title'>What our clients say</h2>
            </div>
            <div className='col test-card-wrap'>
                <div className='card'>
                    <div className='head'>
                        <p className='para'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consec tetur, adipisci velit, sed quia non num the quam eius modi the tempora Neque porro quis quam.</p>
                    </div>
                    <div className='foot'>
                        <div className='color-layer'></div>
                        <div className='pattern-layer'></div>
                        <div className='author'>
                            <div className='quote'>
                                <FaQuoteLeft />
                            </div>
                            <img width="" alt='author' src={author1} />
                        </div>
                        <h5 className='author-name'>Stiven Morgan</h5>
                        <h6 className='author-post'>Pure Tecnology</h6>
                    </div>
                </div>
                <div className='card'>
                    <div className='head'>
                        <p className='para'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consec tetur, adipisci velit, sed quia non num the quam eius modi the tempora Neque porro quis quam.</p>
                    </div>
                    <div className='foot'>
                        <div className='color-layer'></div>
                        <div className='pattern-layer'></div>
                        <div className='author'>
                            <div className='quote'>
                                <FaQuoteLeft />
                            </div>
                            <img width="" alt='author' src={author2} />
                        </div>
                        <h5 className='author-name'>Danial Pedro</h5>
                        <h6 className='author-post'>Northen City</h6>
                    </div>
                </div>
                <div className='card'>
                    <div className='head'>
                        <p className='para'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consec tetur, adipisci velit, sed quia non num the quam eius modi the tempora Neque porro quis quam.</p>
                    </div>
                    <div className='foot'>
                        <div className='color-layer'></div>
                        <div className='pattern-layer'></div>
                        <div className='author'>
                            <div className='quote'>
                                <FaQuoteLeft />
                            </div>
                            <img width="" alt='author' src={author3} />
                        </div>
                        <h5 className='author-name'>Rannsan Wiks</h5>
                        <h6 className='author-post'>CEO, Glob Tech</h6>
                    </div>
                </div>
            </div>
            <div className='col channel-wrapper'>
                <div className='img-box'>
                    <a href='#'>
                        <img className='channel-img' width="" alt="channel" src={ch1} />
                    </a>
                </div>
                <div className='img-box'>
                    <a href='#'>
                        <img className='channel-img' width="" alt="channel" src={ch2} />
                    </a>
                </div>
                <div className='img-box'>
                    <a href='#'>
                        <img className='channel-img' width="" alt="channel" src={ch3} />
                    </a>
                </div>
                <div className='img-box'>
                    <a href='#'>
                        <img className='channel-img' width="" alt="channel" src={ch4} />
                    </a>
                </div>
                <div className='img-box'>
                    <a href='#'>
                        <img className='channel-img' width="" alt="channel" src={ch5} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

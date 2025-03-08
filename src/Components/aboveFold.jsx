import AwesomeSlider from 'react-awesome-slider'
import slider1 from "../assets/slider_1.jpg"
import slider2 from "../assets/slider_2.jpg"
import pattern from "../assets/pattern-layer.png"
import 'react-awesome-slider/dist/styles.css';
import { IoIosArrowRoundForward } from "react-icons/io";

const aboveFold = () => {
  return (
    <div>
        <AwesomeSlider>
            <div className='slider'>
                <div className='pattern-dot' style={{backgroundImage: `url(${pattern})`}}></div>
                <div className='slide' style={{backgroundImage: `url(${slider1})`}}>
                <div className='auto-container'>
                <div className='col w-50'>
                  <div className="content-boxed">
                    <div className="inner-box">
                      <div className="sub-heading-child">Nextbit Internet &amp; TV</div>
                      <h1>Ultimate control of your internet</h1>
                      <div className="btns-box">
                        <a href="#" className="btn btn-primary magic-btn"><span>Read More <IoIosArrowRoundForward /></span> </a>
                        <a href="#" className="btn btn-secondary magic-btn"><span>Contact Now <IoIosArrowRoundForward /></span> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col w-50'></div>
                </div>
                </div>
            </div>
            <div className='slider'>
                <div className='pattern-dot'></div>
                <div className='slide' style={{backgroundImage: `url(${slider2})`}}>
                <div className='auto-container'>
                <div className='col w-50'>
                  <div className="content-boxed">
                    <div className="inner-box">
                      <div className="sub-heading-child">Nextbit Internet &amp; TV</div>
                      <h1>Ultimate control of your internet</h1>
                      <div className="btns-box">
                        <a href="#" className="btn btn-primary magic-btn"><span>Read More <IoIosArrowRoundForward /></span> </a>
                        <a href="#" className="btn btn-secondary magic-btn"><span>Contact Now <IoIosArrowRoundForward /></span> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col w-50'></div>
                </div>
                </div>
            </div>
            <div className='slider'>
                <div className='pattern-dot'></div>
                <div className='slide' style={{backgroundImage: `url(${slider1})`}}>
                <div className='auto-container'>
                <div className='col w-50'>
                  <div className="content-boxed">
                    <div className="inner-box">
                      <div className="sub-heading-child">Nextbit Internet &amp; TV</div>
                      <h1>Ultimate control of your internet</h1>
                      <div className="btns-box">
                        <a href="#" className="btn btn-primary magic-btn"><span>Read More <IoIosArrowRoundForward /></span> </a>
                        <a href="#"  className="btn btn-secondary magic-btn"><span>Contact Now <IoIosArrowRoundForward /></span> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col w-50'></div>
                </div>
                </div>
            </div>
        </AwesomeSlider>
    </div>
  )
}

export default aboveFold
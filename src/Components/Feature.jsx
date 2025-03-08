import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import feature1 from "../assets/feature-1.jpg"

const Feature = () => {
    const [feature, setFeature] = useState()
    const getData = () =>{
        fetch('feature.json', {headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((response) =>{
            return response.json()
        }).then((myFeature) => {
            setFeature(myFeature);
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='feature-wrapper'>
      <div className='auto-container'>
        <div className='row'>
            <div className='col'>
                <p className='sub-heading-child'>Now Showing</p>
                <h2 className='sub-title'>Featured showing</h2>
            </div>
            <div className='col'>
            <a href="about.html" className="btn btn-primary magic-btn"><span>View More <IoIosArrowRoundForward /></span> </a>
            </div>
        </div>
        <div className='row feature-div'>
            {
                feature && feature.length > 0 && feature.map((val) => {
                    return(
                        <div className='feature-card'>
                            <div className='image-box'>
                                <a href='https://www.youtube.com/watch?v=kxPCFljwJws'target='_blank' className='feature-link'>
                                    <span className='play-icon'>
                                    <IoPlay />
                                    <span className='ripple'></span>
                                    </span>
                                </a>
                                <img width="" className='feature-img' alt="feature-img" src={val.src} />
                                <div className='overlay-box'>
                                    <div className='feature-details'>
                                        <ul>
                                            <li><FaStar />{val.rating}</li>
                                            <li><BsChatFill />{val.comments}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='content-box'>
                                <h4 className='feature-name'><a href='/movie'>{val.name}</a></h4>
                                <p className='feature-year'>{val.year}</p>
                            </div>
                        </div>
                    )
                })
            }
           {/* <div className='feature-card'>
                            <div className='image-box'>
                                <a href='https://www.youtube.com/watch?v=kxPCFljwJws'target='_blank' className='feature-link'>
                                    <span className='play-icon'>
                                    <IoPlay />
                                    <span className='ripple'></span>
                                    </span>
                                </a>
                                <img width="" className='feature-img' alt="feature-img" src={feature1} />
                                <div className='overlay-box'>
                                    <div className='feature-details'>
                                        <ul>
                                            <li><FaStar /> 5.1</li>
                                            <li><BsChatFill /> 25</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='content-box'>
                                <h4 className='feature-name'>Robin Hood</h4>
                                <p className='feature-year'>2010</p>
                            </div>
                        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Feature

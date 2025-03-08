import React from 'react'
import Header from '../Components/Header'
import OnlineStore from '../Components/onlineStore'
import FooterCTA from '../Components/footerCTA'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import product1 from "../assets/5.jpg"
import reviewer1 from "../assets/author-1.jpg"
import reviewer2 from "../assets/author-2.jpg"
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Product = () => {
  return (
    <>
    <Header />
    <HeroSection title = "All Products" subtitle="products" />
    <div className='product-section'>
        <div className='auto-container'>
            <div className='row product-page'>
                <div className='col w-55 product-images'>
                    <div className='product-links'>
                        <ul>
                            <li className='image-btn active'>
                                <a href='#'>
                                    <img width="" alt="item" src={product1} / >
                                </a>
                            </li>
                            <li className='image-btn'>
                                <a href='#'>
                                    <img width="" alt="item" src={product1} / >
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='main-image'>
                        <img alt="main-image" width="100%" src={product1} />
                    </div>
                </div>
                <div className='col w-40 product-content'>
                    <h2 className='card-title'>Ultra HD 2GB+8GB TV Box $33.40</h2>
                    <div className='rating'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <a href='#'>2 Reviews</a>
                    </div>
                    <p className='sub-heading-child'>$55.00</p>
                    <div className='para'>
                    Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations Ultra HD 2GB+8GB TV Box $33.40
                    </div>
                    <div className='product-form'>
                        <form>
                            <select className='form-select'>
                                <option>
                                    Color
                                </option>
                                <option>
                                    Red
                                </option>
                                <option>
                                    Green
                                </option>
                                <option>
                                    Blue
                                </option>
                                <option>
                                    Brown
                                </option>
                            </select>
                            <select className='form-select mb-0'>
                                <option>
                                    Quantity
                                </option>
                                <option>
                                    01
                                </option>
                                <option>
                                    02
                                </option>
                                <option>
                                    03
                                </option>
                                <option>
                                    04
                                </option>
                            </select>
                            <button className='btn btn-primary btn-main magic-btn w-100'><span>Add to cart</span></button>
                        </form>
                    </div>
                    <div className='product-list'>
                        <ul>
                            <li>
                            Category: <a href='#'>Interior</a>     
                            </li>
                            <li>
                            Tag: <a href='#'>Bathroom,</a><a href='#'>Contemporary,</a> <a href='#'>Grooming</a>   
                            </li>
                        </ul>
                    </div>
                    <div className='social-links'>
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
            <div className='row tab-wrapper'>
                <Tabs>
                    <TabList>
                    <Tab>Description</Tab>
                    <Tab>Additional Information</Tab>
                    <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                    <p className='para'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    </TabPanel>
                    <TabPanel>
                    <p className='para'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    </TabPanel>
                    <TabPanel>
                        <div className='review-wrapper'>
                            <div className='review-container'>
                                <h3 className='sub-subtitle'>2 Reviews For win Your Friends</h3>
                                <div className='review-box'>
                                    <div className='review-img'>
                                        <img width="" alt='reviewer' src={reviewer1} />
                                    </div>
                                    <div className='review-content'>
                                        <div className='review-header'>
                                            <p className='review-details'>Steven Rich – Sep 17, 2022:</p>
                                            <span className='rating-given'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                        <div className='review-body'>
                                            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-box'>
                                    <div className='review-img'>
                                        <img width="" alt='reviewer' src={reviewer2} />
                                    </div>
                                    <div className='review-content'>
                                        <div className='review-header'>
                                            <p className='review-details'>Natasha Cobus – Aug 21, 2022:</p>
                                            <span className='rating-given'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>
                                        <div className='review-body'>
                                            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-form'>
                                <h2 className='sub-subtitle'>Add Your Comments</h2>
                                <div className='rating-box'>
                                    <p>Your Rating:</p>
                                    <ul>
                                        <li>
                                            <a>
                                                <FaStar />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <FaStar />
                                                <FaStar />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <form>
                                    <div className='form-field'>
                                        <label>First Name *</label>
                                        <input type="text" placeholder=''  />
                                    </div>
                                    <div className='form-field'>
                                        <label>Last Name*</label>
                                        <input type="text" placeholder=''  />
                                    </div>
                                    <div className='form-field'>
                                        <label>Email*</label>
                                        <input type="text" placeholder=''  />
                                    </div>
                                    <div className='form-field'>
                                        <label>Your Comments*</label>
                                        <textarea></textarea>
                                    </div>
                                    <button className='btn btn-primary btn-main magic-btn'><span>Submit Now</span></button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </div>
    <OnlineStore />
    <FooterCTA />
    <Footer />
    </>
  )
}

export default Product
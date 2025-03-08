import React from 'react'
import {FaMobileRetro, FaEnvelope} from "react-icons/fa6"
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FaShoppingBag,FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import cart1 from "../assets/post-thumb-1.jpg";
import cart2 from "../assets/post-thumb-2.jpg";
import { useState } from 'react';
import Mainpopup from './Main-popup';
import SearchPopup from './Search-popup';

const Header = (props) => {
  const [iScart, setiSCart] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const cartCall = () => {
    setiSCart(!iScart);
  }
  const mainCall = () =>{
    setMainMenu(!mainMenu)
  }
  const searchCalled = () =>{
    setIsSearch(!isSearch);
  }
  return (
    <>
    <header>
        <div className='row above-header'>
            <div className='auto-container'>
              <div className='above-header-inner'>
              <div className='left-above-header'>
                <ul>
                  <li>
                    <a href='tel:+6789-875-2235'>
                    <FaMobileRetro />
                    Call: +6789-875-2235
                    </a>
                  </li>
                  <li>
                    <a href='mailto:Info.domain@info.com'>
                    <FaEnvelope />
                    Info.domain@info.com
                    </a>
                  </li> 
                </ul>
            </div>
            <div className='right-above-header'>
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
        </div>
        <div className='row main-header'>
          <div className='auto-container'>
            <div className='header-nav'>
              <div className='logo'>
                <a href='#'>
                  <img alt='logo' width="" src={logo} />
                </a>
              </div>
              <div className='navigator'>
                <nav>
                  <ul>
                    <li>
                      <a href='#' className="active">home</a>
                    </li>
                    <li>
                      <a href='#'>about</a>
                    </li>
                    <li>
                      <a href='#'>services</a>
                    </li>
                    <li>
                      <a href='#'>shop</a>
                    </li>
                    <li>
                      <a href='#'>blog</a>
                    </li>
                    <li>
                      <a href='#'>contact us</a>
                    </li>
                  </ul>
                  <div className='search' onClick={searchCalled}>
                  <FaSearch />
                  </div>
                </nav>
                <div className='right-nav'>
                  <div className='cart' onClick={cartCall}>
                  <FaShoppingBag />
                  <span className="item-count">5</span>
                  </div>
                  <div className='navslider' onClick={mainCall}>
                  <CgMenuGridO />
                  </div>
                </div>
              </div>
              <div className={!iScart ? "cart-window" : "cart-window active"} >
                    <div className='cart-row'>
                      <div className='item-img'>
                        <img alt='cart-item' width="" src={cart1} />
                      </div>
                      <div className='item-content'>
                        <div className='title'>
                          <p>Product 01</p>
                          <IoCloseSharp />
                        </div>
                        <span className='quantity'>
                          Quantity 1
                        </span>
                        <span className='price'>
                          $99.00
                        </span>
                      </div>
                    </div>
                    <div className='cart-row'>
                      <div className='item-img'>
                        <img alt='cart-item' width="" src={cart2} />
                      </div>
                      <div className='item-content'>
                        <div className='title'>
                          <p>Product 01</p>
                          <IoCloseSharp />
                        </div>
                        <span className='quantity'>
                          Quantity 1
                        </span>
                        <span className='price'>
                          $99.00
                        </span>
                      </div>
                    </div>
                    <div className='cart-row'>
                      <div className='quantity'>
                        Sub Total: <span>$198</span>
                      </div>
                      <div className='btn-wrapper'>
                        <button className='btn cart-btn'>View Cart</button>
                        <button className='btn cart-btn'>checkout</button>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    </header>
    <Mainpopup show={mainMenu} close={() => setMainMenu(!mainMenu)}/>
    <SearchPopup show={isSearch} close = {() => setIsSearch(!isSearch)} />
    </>
  )
}

export default Header
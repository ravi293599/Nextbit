import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const footerCTA = () => {
  return (
    <div className='footer-CTA'>
        <div className='auto-container'>
            <div className='CTA'>
                <div className='row'>
                    <div className='col w-50'>
                        <h3>Sign up for our newsletter</h3>
                        <p>Stay up to update with our latest news and products.</p>
                    </div>
                    <div className='col w-50'>
                    <form>
                        <div className='form-group'>
                            <input type='email' className="input-field" placeholder='Enter street address & apartment' required />
                            <button className='btn btn-primary magic-btn'>
                                <span>Subscribe
                                <IoIosArrowRoundForward />
                                </span>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default footerCTA

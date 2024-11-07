import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const CTA = () => {
  return (
    <div className='CTA-wrapper'>
      <div className='auto-container'>
       <div className='CTA'>
       <div className='col w-50'>
            <h2>Let's find deals and services available in your area</h2>
        </div>
        <div className='col w-50'>
            <form>
                <div className='form-group'>
                    <input type='email' className="input-field" placeholder='Enter street address & apartment' required />
                    <button className='btn btn-primary magic-btn'>
                        <span>Check Availability
                        <IoIosArrowRoundForward />
                        </span>
                    </button>
                </div>
            </form>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CTA

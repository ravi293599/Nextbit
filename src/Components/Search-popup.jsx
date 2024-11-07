import React from 'react'
import { FaSearch } from "react-icons/fa";
import { TiArrowUpThick } from "react-icons/ti";

const SearchPopup = (props) => {
  return (
    <>
    {/* className={show ? "search-overlay" : "search-overlay active"} */}
    <div className={!props.show ? "search-overlay" : "search-overlay active"}>
        <div className='search-content'>
            <div className='up-btn' onClick={() => props.close()}>
            <TiArrowUpThick />
            </div>
            <form>
                <div className='form-group'>
                    <input type="text" className='search-bar' />
                    <button className='search-btn'><FaSearch /></button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default SearchPopup
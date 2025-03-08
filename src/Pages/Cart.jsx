import Header from '../Components/Header'
import FooterCTA from '../Components/footerCTA'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import item1 from "../assets/5.jpg"
import { IoMdArrowDropup,IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Cart = () => {
  return (
    <>
    <Header />
    <HeroSection title = "shopping cart" subtitle="shopping cart" />
    <div className='cart-container'>
        <div className='auto-container'>
            <div className='row'>
                <div className='cart-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Preview</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img alt="item" width="" src={item1} />
                                </td>
                                <td>TV & Streaming</td>
                                <td>$50.00</td>
                                <td><div className='counter'>
                                        <span className='counter-digit'>1</span>
                                        <span className='counter-btn'>
                                            <a href='#'><IoMdArrowDropup /></a>
                                            <a href='#'><IoMdArrowDropdown /></a>
                                        </span>
                                    </div>
                                </td>
                                <td>$50.00</td>
                                <td><a href='#'><ImCross /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row apply-coupon'>
                <div className='col'>
                    <input type='text' placeholder='Coupon code' />
                    <div className='btn-wrapper'>
                    <button className='btn btn-primary btn-main magic-btn'><span>Apply Coupon</span></button>
                    <button className='btn btn-primary btn-main magic-btn'><span>update cart</span></button>
                    </div>
                </div>
            </div>
            <div className='row total-table'>
                <div className='col'>
                <h2 className='sub-title'>Cart totals</h2>
                <table>
                    <tbody>
                        <tr>
                        <td>Subtotal</td>
                        <td>$50.00</td>
                        </tr>
                        <tr>
                        <td>Shipping</td>
                        <td>$10.00</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>$60.00</td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn btn-primary btn-main magic-btn'><span>proceed to checkout</span></button>
                </div>
            </div>
        </div>
    </div>
    <FooterCTA />
    <Footer />
    </>
  )
}

export default Cart

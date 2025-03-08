import Header from '../Components/Header'
import FooterCTA from '../Components/footerCTA'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import { Formik, Form } from "formik";
import payment from "../assets/paypal.jpg"

const Checkout = () => {
  return (
    <>
        <Header />
        <HeroSection title = "checkout" subtitle="checkout" />
        <div className='checkout-container'>
            <div className='auto-container'>
                <div className='row'>
                    <div className='col login-link'>
                        Returning customer? <a href='#'>Click here to login</a>
                    </div>
                </div>
                <div className='row checkout-main'>
                    <div className='col'>
                        <h2 className='card-title'>Billing Details</h2>
                        <div className='billing-form'>
                            <Formik>
                                <Form>
                                    <div className='form-field'>
                                        <label htmlFor='fName' className='input-label'>
                                            First Name *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="fName"
                                        id="fName"
                                        placeholder='First Name'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='lName' className='input-label'>
                                            Last Name *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="lName"
                                        id="lName"
                                        placeholder='Last Name'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='CName' className='input-label'>
                                            Company Name
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="CName"
                                        id="CName"
                                        placeholder='Company Name'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='address' className='input-label'>
                                            Address*
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="address"
                                        id="address"
                                        placeholder='Street Address'
                                        />
                                         <input type="text"
                                        autoComplete='off'
                                        name="address"
                                        id="address"
                                        placeholder='Apartment, Suit unit etc (optional)'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='town' className='input-label'>
                                            Town / City *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="town"
                                        id="town"
                                        placeholder='Town / City'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='state' className='input-label'>
                                        State / Country *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="state"
                                        id="state"
                                        placeholder='State / Country'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='state' className='input-label'>
                                        Postcode / Zip *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="postcode"
                                        id="postcode"
                                        placeholder='Postcode / Zip'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='email' className='input-label'>
                                        Email Address *
                                        </label>
                                        <input type="email"
                                        autoComplete='off'
                                        name="email"
                                        id="email"
                                        placeholder='Email Address'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <label htmlFor='phone' className='input-label'>
                                        Phone *
                                        </label>
                                        <input type="text"
                                        autoComplete='off'
                                        name="phone"
                                        id="phone"
                                        placeholder='Phone'
                                        />
                                    </div>
                                    <div className='form-field'>
                                        <input type="checkbox" />Create an account?
                                    </div>
                                    <h2 className='card-title'>Ship to Different Address</h2>
                                    <div className='form-field'>
                                        <label htmlFor='phone' className='input-label'>
                                        Order Notes
                                        </label>
                                        <textarea placeholder="Note about your order. e.g. special note for delivery"></textarea>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className='col order-details'>
                        <h2 className='card-title'>Your Order</h2>
                        <div className='shop-box'>
                            <table>
                                <tr>
                                    <td>PRODUCT</td>
                                    <td>TOTAL</td>
                                </tr>
                                <tr>
                                    <td>TV & STREAMING</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td>SUBTOTAL</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td>SHIPPING AND HANDLING</td>
                                    <td>Free Shipping</td>
                                </tr>
                                <tr>
                                    <td>TOTAL</td>
                                    <td>$50.00</td>
                                </tr>
                            </table>
                            <div className='payment-options'>
                                <ul>
                                    <li>
                                        <div className='radio-input'>
                                            <input type="radio" id="payment1" />
                                            <label htmlFor="payment1">
                                                <p className='payment-title'>Direct Bank Transfer</p>
                                                <span className="payment-tooltip">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                                </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='radio-input'>
                                            <input type="radio" id="payment2" />
                                            <label htmlFor="payment2">
                                                <p className='payment-title'>Cheque Payment</p>
                                                <span className="payment-tooltip">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                                </span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='radio-input'>
                                            <input type="radio" id="payment3" />
                                            <label htmlFor="payment3">
                                                <p className='payment-title'>Paypal</p>
                                                <img alt='payment' width="" src={payment} />
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button className='btn btn-primary btn-main magic-btn'><span>place order</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterCTA />
        <Footer />
    </>
  )
}

export default Checkout

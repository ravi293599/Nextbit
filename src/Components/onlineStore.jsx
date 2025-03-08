import React, { useEffect, useState } from 'react'
import product1 from "../assets/1 (1).png"
import product2 from "../assets/2 (1).png"
import product3 from "../assets/3 (1).png"
import product4 from "../assets/4 (1).png"
import { FaHeart } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";
import AwesomeSlider from 'react-awesome-slider'

const onlineStore = () => {
    const [product , setProduct] = useState();
    const getData = () =>{
        fetch("product.json", {headers : {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }}).then((response) => {
            return response.json();
        }).then((myProduct) => {
            setProduct(myProduct)
        })
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <div className='store-wrapper'>
        <div className='auto-container'>
           <div className='online-store'>
                <div className='row'>
                    <div className='col w-100'>
                        <p className='sub-heading-child'>online store</p>
                        <h2 className='sub-title'>Our popular products</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='product-wrapper'>
                        {
                            product && product.length > 0 && product.map((value) => {
                                return(
                                    <div className='product-item'>
                                        <div className='img-box'>
                                            <a href={value.link}>
                                            <img alt="product" width="" src={value.src} />
                                            </a>
                                        </div>
                                        <div className='content-box'>
                                            <div className='product-details'>
                                                <a href={value.link} className='name'>{value.name}</a>
                                                <p className='price'>{value.price}</p>
                                            </div>
                                            <div className='add-cart-box'>
                                                <ul>
                                                    <li><a href="#">Add to Cart</a></li>
                                                    <li><a href="#"><FaHeart /></a></li>
                                                    <li><a href="#"><TbSwitch2 /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default onlineStore
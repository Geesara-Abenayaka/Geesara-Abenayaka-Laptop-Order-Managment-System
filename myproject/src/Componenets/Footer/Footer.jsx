import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import headsetlogo from '../../assets/headset.png'

function Footer() {
  return (
    <div className='footerbackground'>
      <div className='horizontalizer'>
        <div>
          <img src={headsetlogo} alt="headsetlogo" className='headsetlogo' />
          <p className='vvv'>We are Here! 24/7 Customer Support
            <br />
            <p className='ooo'>+94 773 277 277 | +94 773 675 523</p>
          </p>
          <p id="sitename">pixelport.lk (Pvt) Ltd.
            <br />
            <p id="address">#401, Galle Road, Matara. Sri Lanka.<br />
              <p id="techsupport">Technical Support : <p id="number">+94 112 550 046</p>
              <br/><FaFacebookSquare className='reacticon'/>
              <FaInstagramSquare className='reacticon'/>
             <FaYoutube className='reacticon'/>
              </p></p>

          </p>
          <br />
        </div>
        <div className='headerspacer'>
          <p className='footerheader'>Top Brands</p>

          <p className='brandsinthestore'>Apple
            <br />Asus
            <br />Dell
            <br />HP
            <br />Lenovo
            <br />MSI
            <br />Acer
          </p>
        </div>

        <div className='headerspacer'>
          <p className='footerheader'>Find It Fast</p>

          <p className='brandsinthestore'>Apple
            <br />Home
            <br />About Us
            <br />Contact Us
            <br />Delivery Policy
            <br />Privacy Policy
            <br />Our Products
          </p>
        </div>


        <div className='headerspacer'>
          <p className='footerheader'>Laptops</p>

          <p className='brandsinthestore'>Apple Macbook
            <br />AMD Laptops
            <br />Intel Celeron
            <br />Our Products
            <br />Core i3 Laptops
            <br />Core i5 Laptops
            <br />Core i7 Laptops
          </p>
        </div>

      </div>
      <br/>
      <br/>
      <br/>
      <p className='footerbottom'>Copyright © 2025 pixelport.lk. All rights reserved.
      </p>

   
    </div>
  
  )
}

export default Footer
import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/laptop-1.svg'
import lapimg from '../../assets/laptopstore.jpg'
import MenuLink from '../MenuLink/MenuLink'

import ReactImg from "../../assets/aaa.webp"
import VueImg from "../../assets/lap1.jpg"



function HeaderContent() {
  
  
  return (
    <div id="navcontent">
        
      {/* <a href="https://www.react.dev">
        <img src={logo} alt="laptopsymbol" id="symbol" />
      </a>
      <div className='tabs' >

        <MenuLink linkname="Home" url="#Home" />
        <MenuLink linkname="About" url="#about" />
        <MenuLink linkname="Contact" url="#contact" />
        <MenuLink className="logincss" linkname="Login" url="#login" />

   
      </div> */}
      
      <div class='content'> 
      <p>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div class="content1"> Welcome to PixelPort</div>
      </p>
      
      </div>
      <div class='content'> 
      <br/>
     
      <p>
        <div class="content2">Our showroom and online store offer a wide range of laptops, including gaming machines, workstations, and budget-friendly options. We partner with top brands to ensure authentic products, great prices, and excellent service.From assisting you in choosing the perfect laptop to ensuring seamless delivery and ongoing service, we aim to make every step of your purchase journey enjoyable and hassle-free. Explore our range today and discover the ideal device</div>
      </p>
      
      </div>
      
    </div>


  )

}



export default HeaderContent
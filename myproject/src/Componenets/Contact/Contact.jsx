import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import './Contact.css'

import pic from '../../assets/Telephone-Operator.jpg'
function Contact() {
    return (
        <div className='wholebody'>
            <NavigationBar />
            <br />
            <br />
            <br />
            {/* <br /> */}
            <div className='massageform'> 
                <br/>
            <p id="para3">Contact Us</p>
            
            <br />
            <br />
            <br />
            <p id="para4">Contact Us
                {/* <img src={pic} alt="telephone_operator" className='imagetel'></img> */}

            </p>
            <br />


            <p id="para5">You can contact our Customer Service for all questions and queries on any of the following channels during office hours


            </p>

            <div id="form">
                <label for="name" className='lable'>Your Name (required)</label>

                <br />
                <input type="text" id="name" name="name" placeholder="Your name.." />
                <br />
                <br />
                <label for="email" className='lable'>Your Email (required)</label>
                <br />
                <input type="text" id="email" name="email" placeholder="Your email.." />
                <br />
                <br />
            </div>


            <p class="para6">
                <p class="para5">pixelport.lk (Pvt) Ltd
                    </p>
                #401 Galle Rd, Matara 00400<br />
                M : +94 773 277 277<br />
                E : pixelport@laptop.lk<br />
                
                <br />
                Working Hours<br />
                Monday – Saturday: 09:30AM – 07:00PM<br />
              
                <br />
                Technical Support<br />
                T : +94 112 550 045 (Pvt) Ltd</p>
            <div id="form1">
                <label for="subject" className='lable'>Subject</label>
                <br />
                <input type="text" id="subject" name="subject" placeholder="Add a subject to this message.." />
                <br />
                <br />
                <label for="message" className='lable'>Subject</label>
                <br />
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Your message.." />
                <br />
                <br />
                <input type="submit" value="submit"/>
            </div>
            <div id='ifra'>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126987.15542224883!2d80.3988622625!3d5.946605600000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f38f355d91b%3A0xc68226867709b253!2sMetropolitan%20mcentre%20-%20Matara!5e0!3m2!1sen!2slk!4v1735227537828!5m2!1sen!2slk"
                    width="1400"
                    height="500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Contact
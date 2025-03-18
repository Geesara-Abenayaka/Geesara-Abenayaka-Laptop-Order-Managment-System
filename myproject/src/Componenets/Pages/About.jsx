import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import './About.css'
// import ReactImg from "./assets/aaa.webp"
import ReactImg from "../../assets/aaa.webp"
import VueImg from "../../assets/bbb.webp"
import QueImg from "../../assets/ccc.jpg"
import React1 from "../../assets/ddd.jpg"
import React2 from "../../assets/eee.avif"
import React3 from "../../assets/fff.webp"
import React4 from "../../assets/ggg.jpg"
import React5 from "../../assets/hhh.webp"
import React6 from "../../assets/iii.jpg"
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function About() {
    return (
        <div>
            <NavigationBar />
            <div className='opjk'>
            <br />
            <br />
            <br />
            <br />
            <p className="topic">20 Years of Leadership in Sri Lanka’s Laptop Market</p>
            <br />

            <p className="para1">For over two decades, Pixel Port has been a beacon of innovation, reliability, and exceptional service in Sri Lanka’s laptop market. Founded in 2003 by visionary entrepreneur and computer engineer Mr. Geesara Abenayaka, the store began with a simple mission: to bring world-class technology to Sri Lankans. Over the years, it has evolved into the nation’s leading laptop retailer, trusted by individuals, businesses, and institutions for its commitment to quality and customer satisfaction. Partnering with globally renowned brands such as Dell, HP, Lenovo, ASUS, and Apple, Pixel Port has consistently provided cutting-edge laptops tailored to diverse needs—be it for students, professionals, gamers, or creatives.</p>
            <p className="para1">As technology advanced, Pixel Port stayed ahead of the curve, setting benchmarks in the Sri Lankan market. It was the first to introduce innovations like SSD storage, touch screens, and 2-in-1 laptop capabilities. The store’s mission extended beyond selling laptops, focusing on educating customers and empowering them to make informed decisions. This approach ensured customers could access devices perfectly suited to their requirements. Alongside its pioneering products, the store became known for its unparalleled service, offering expert guidance during purchases and comprehensive after-sales support. The Pixel Port service center, staffed with certified technicians, became the gold standard for repairs, upgrades, and maintenance.</p>
            <p className="para1">Over the past 20 years, Pixel Port has grown from a single store to a nationwide network, with showrooms in Colombo, Kandy, Galle, and Jaffna. It has served countless satisfied customers and equipped businesses, schools, and universities with the technology to thrive in the digital age. The store's legacy lies in its unwavering commitment to innovation, trust, and a customer-first philosophy. As it celebrates two decades of leadership, Pixel Port looks forward to shaping the future, continuing to redefine technology retail, and empowering the next generation of Sri Lankans to succeed in an ever-evolving world.</p>
            <br/>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ReactImg} className="d-block w-50 mx-auto" alt="React Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={VueImg} className="d-block w-50 mx-auto" alt="Vue Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={QueImg} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React1} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React2} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React3} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React4} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React5} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                    <div className="carousel-item">
                        <img src={React6} className="d-block w-50 mx-auto" alt="Que Framework" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p className="topic12">"Power, Performance, Precision – Choose Your Perfect Laptop!"</p>
            <br/>
            <br/>
            <br/>
            <Footer/>
            </div>
        </div>
    

    )
}

export default About
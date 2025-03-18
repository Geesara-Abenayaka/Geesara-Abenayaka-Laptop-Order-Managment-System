

import React from 'react'
import { useNavigate } from "react-router-dom";

import './Card.css'
import { FaCartShopping } from "react-icons/fa6";
import { toast, Bounce } from 'react-toastify';
import laptop1 from '../../assets/metrolap.png'
function Cards({ image, isInStock, Model, Price, onModalq, id, removeFromCart, addToCart, setModalDataId }) {
    const navigate = useNavigate();
    return (
        <div className="ttt">

            <img src={image} alt="laptop-1" className='laptopimage' id="qwert">
            </img>
            <FaCartShopping className='carticon' />
            <div className='text-row'>
                <p id="corplap">Corporate Laptop</p>
                <p id="stock" style={{ color: isInStock ? "#01f702" : "red" }}>{isInStock ? "In Stock" : "Out of Stock"}</p>
            </div>
            <p className='lapmodel'>{Model}</p>
            <p className='price'>Rs. {Price},000.00</p>
            <div className='viewmorediv'><button type='button' className='viewmorebutton' onClick={() => {setModalDataId(id);onModalq(true)}}>View More</button>

            </div>

            <div className='buttondiv'>

                <button type='button' className='buynowbutton' onClick={() => {
                    addToCart(id); toast.success('Added to cart', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                }}>Buy Now</button>
            </div>



        </div>




    )
}

export default Cards
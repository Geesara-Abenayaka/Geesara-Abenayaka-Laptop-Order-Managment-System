import React, { useState } from 'react';
import './Checkout.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import { toast, Bounce, ToastContainer } from 'react-toastify';

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
    });


    const isFormValid = () => {
        return (
            formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.address.trim() !== ''
        );
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='wholebody2'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <NavigationBar />
            <br />
            <br />
            <br />
            <div className='placeorderform'>
                <br />
                <br />
                <p id="para4">Billing details</p>
                <br />
                <div id="form">
                    <label htmlFor="firstName" className='lable'>
                        First Name (required)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name.."
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="lastName" className='lable'>
                        Last Name (required)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name.."
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="town" className='lable'>
                        Town / City (optional)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="town"
                        name="town"
                        placeholder="Your town/city.."
                        value={formData.town || ''}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="phone" className='lable'>
                        Phone (required)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Your phone.."
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="email" className='lable'>
                        Email address (required)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />
                </div>

                <div id="form1">
                    <label htmlFor="address" className='lable'>
                        Address (required)
                    </label>
                    <br />
                    <textarea
                        id="address"
                        name="address"
                        rows="4"
                        cols="50"
                        placeholder="Your address.."
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    
                    <br />

                    <br />
                </div>

                {/* Place Order Button */}
                <input
                        type="submit"
                        value="Place Order"
                        className='placeorderbtn'
                        disabled={!isFormValid()}
                        onClick={() => {
                            toast.success('Your Order Confirmed!', {
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
                        }}


                 
                    />
                    
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;

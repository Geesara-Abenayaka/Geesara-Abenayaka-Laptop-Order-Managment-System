import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import sss from '../../assets/sss.mp4';
import './SignUp.css';
// import { Link, useAsyncError } from "react-router"

import { Link } from 'react-router-dom';
// import MenuLink from '../MenuLink/MenuLink';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const [creds, setCreds] = useState({
        email: "",
        password: "",
        passwordVisible: false
    });

    const onCredChange = (key, value) => {
        const current = {...creds};
        current[key] = value;
        setCreds(current);
    }
    
    const handleSignUp = async () => {
        if (!creds.email || !creds.password) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(creds.email)) {
            alert("Please enter a valid email.");
            return;
        }

        // Send the sign-up request to the backend
        const res = await fetch('http://localhost:3000/user', {
            method: "POST",
            body: JSON.stringify({ email: creds.email, password: creds.password }),
            headers: { 'Content-Type': "application/json" }
        });

        if (res.ok) {
            navigate("/login");
        } else {
            alert("User already exists or there was an error.");
        }
    };

    return (
        
        <div>
            <NavigationBar />
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={sss} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
        
                    <div className="qqq">
                        <div className="form4">
                            <p className="p1">Sign Up</p>
                            <p className="p2">
                                Already have an account yet?
                                <Link to="/login" className="login">Login</Link>
                                {/* <MenuLink className="signup" linkname="Sign Up" url="/signup" /> */}
                            </p>
                            <br />
                            <div id="form2">
                                <label htmlFor="email" className="lable1" >Email Address</label>
                                <br />
                                <input type="text" id="email" name="email" placeholder="You@example.com" value={creds.email} onChange={(e) => onCredChange('email', e.target.value)}/>
                                <br /><br />
                                <label htmlFor="password" className="lable1">Password</label>
                                <br />
                                <input type="password" id="password" name="password" placeholder="Enter 6 charracter or more"  required value={creds.password} onChange={(e) => onCredChange('password', e.currentTarget.value)} />
                                <br /><br />
                                {/* <label htmlFor="pwd" className="lable1">Password</label>
                                <br />
                                <input type="password" id="pwd" name="pwd"  placeholder="Enter Your Password.." />
                                <br /><br /><br /> */}
                                <input type="checkbox" id="rememberme" name="rememberme" value="rem"/>
                                <label htmlFor="rememberme" className="lable1"> Remember me</label><br/>

                                <input type="submit" value="Sign Up" onClick={()=>handleSignUp()}/>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

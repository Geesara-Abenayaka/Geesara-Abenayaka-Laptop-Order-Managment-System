import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import sss from '../../assets/sss.mp4';
import './Login.css';
import { Link , useAsyncError} from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router'

// import MenuLink from '../MenuLink/MenuLink';
function Login() {
    const navigate = useNavigate();

    const [creds, setCred] = useState({email: "", password: "" });

    const onCredChange = (key, value) => {
        const current = {...creds};
        current[key] = value;
        setCred(current);
    }

    const handleLogin = async () => {
        const res = await fetch('http://localhost:3000/login', {method: "POST", body:JSON.stringify(creds), headers:{'Content-Type': "application/json"}});
        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('userEmail', data.email);
            navigate("/");
        } else {
            alert("incorrect username or password");
        }
    }




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
                            <p className="p1">Login</p>
                            <p className="p2">
                                Don't have an account yet?
                                <Link to="/signup" className="signup">Sign Up</Link>
                                {/* <MenuLink className="signup" linkname="Sign Up" url="/signup" /> */}
                            </p>
                            <br />
                            <div id="form2">
                                <label htmlFor="email1" className="lable1">Email Address</label>
                                <br />
                                <input type="text" id="email1" name="email1" placeholder="You@example.com" required value={creds.email} onChange={(e) => onCredChange('email', e.currentTarget.value)}/>
                                <br /><br />
                                <label htmlFor="pwd" className="lable1">Password</label>
                                <br />
                                <input type="password" id="email1" name="email1" placeholder="Enter 6 charracter or more" required value={creds.password} onChange={(e) => onCredChange('password', e.currentTarget.value)} />
                                <br /><br />
                                {/* <label htmlFor="pwd" className="lable1">Password</label>
                                <br />
                                <input type="password" id="pwd" name="pwd"  placeholder="Enter Your Password.." />
                                <br /><br /><br /> */}
                                <input type="checkbox" id="rememberme" name="rememberme" value="rem"/>
                                <label for="rememberme" className="lable1"> Remember me</label><br/>

                                <input type="submit" value="Login" onClick={() => handleLogin()}/>
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

export default Login;

import './Changepwd.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sss from '../../assets/sss.mp4';

function Changepwd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  
    console.log('Email in handleSubmit:', email);

    if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/updatepassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword: password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Password changed successfully!");
        navigate("/"); 
      } else {
        alert(data.error || "Failed to update password.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={sss} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <div className="qqq">
            <div className="form4">
              <p className="p1">Change Password!</p>
              <br />
              <form id="form2" onSubmit={handleSubmit}>
                <label htmlFor="email" className="lable1">Email Address</label>
                <br />
                <input
                  type="text1"
                  id="email"
                  name="email"
                  placeholder="You@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label htmlFor="password" className="lable1">New Password</label>
                <br />
                <input
                  type="password"
                  id="new-password"
                  name="changepassword1"
                  placeholder="Enter 6 characters or more"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <label htmlFor="confirm-password" className="lable1">Confirm Password</label>
                <br />
                <input
                  type="password"
                  id="confirm-password"
                  name="changepassword2"
                  placeholder="Enter 6 characters or more"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br /><br />
                <input type="submit" value="OK" />
                <br /><br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepwd;

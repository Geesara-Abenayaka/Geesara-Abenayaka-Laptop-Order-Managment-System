import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './NavigationBar.css';
import MenuLink from '../MenuLink/MenuLink';
import logo from '../../assets/laptop-1.svg';
import { FaCartShopping } from "react-icons/fa6";

function NavigationBar() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email);
    } else {
      setEmail(null);
    }
  }, []);



  const handleLogout = () => {
    
    localStorage.removeItem('user');
 
    setEmail(null);

    navigate("/login");
  };

  const handleDelete = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser || !storedUser.id) {
        alert("No user found to delete");
        return;
      }

      const userId = storedUser.id;


      const res = await fetch(`http://localhost:3000/user/${userId}`, {
        method: "DELETE",
        headers: { 'Content-Type': "application/json" },
      });

      if (res.ok) {

        localStorage.removeItem('user');
        setEmail(null);
        alert("User deleted successfully");
 
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user");
    }
    
  };



  
  return (
    <div id="navigation">
      <div className='companyicon'>
        <a href="https://www.react.dev">
          <img src={logo} alt="laptopsymbol" id="symbol" />
        </a>
        <p className='companyname'>PixelPort</p>
      </div>
      <div className='tabs1'>
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="About" url="/about" />
        <MenuLink linkname="Contact" url="/contact" />
        <Link to="/cart" className="cartlink">
          <FaCartShopping className='cartsvg' />
        </Link>
        <div className="dropdown">
          <button className="dropbtn"><CgProfile className='profilesvg' /></button>
          <div className="dropdown-content">
          

            {email ? (
              <>
                <Link to="/login"onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }} >Logout</Link>
                <Link to="/cart">MyCart</Link>
                <Link to="/orders">MyOrders</Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete();
                  }}
                >
                  Delete Account
                </Link>
                <Link
                  to="/changepwd"
                >
                  Change Password
                </Link>
                <p className='loggedinprofile'>Logged in as {email}</p>
              </>
            ) : (<> <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link></>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

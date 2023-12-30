import React, { useState } from 'react'
import Logo from "../Images/FoodHubLogo.png";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");

  const updateButton = () => {
    logButton === "Login" ? setLogButton("LogOut") : setLogButton("Login");
  }
  return (
    <div className='header p-2 flex justify-between bg-slate-100'>
        <div className="image w-12"><img src={Logo} alt="FoodHubLogo"/></div>
        <div className="navBar flex">
        <ul className='flex'>
            <li className='navItem p-2 font-bold'>Home</li>
            <li className='navItem p-2 font-bold'>About Us</li>
            <li className='navItem p-2 font-bold'>Contact Us</li>
            <li className='navItem p-2 font-bold'>Cart</li>
            <li className='navItem p-2 font-bold'><button className='bg-slate-300 p-1 rounded-md border-2 border-black -mt-1' onClick={updateButton}>{logButton}</button></li>
        </ul>
        </div>
    </div>
  )
}

export default Header

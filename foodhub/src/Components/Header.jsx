import React from 'react'
import Logo from "../Resources/FoodHubLogo.png";

const Header = () => {
  return (
    <div className='header p-2 flex justify-between bg-slate-100'>
        <div className="image w-12"><img src={Logo} alt="FoodHubLogo"/></div>
        <div className="navBar flex">
        <ul className='flex'>
            <li className='navItem p-2 font-bold'>Home</li>
            <li className='navItem p-2 font-bold'>About Us</li>
            <li className='navItem p-2 font-bold'>Contact Us</li>
            <li className='navItem p-2 font-bold'>Cart</li>
        </ul>
        </div>
    </div>
  )
}

export default Header

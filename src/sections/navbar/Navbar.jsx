import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import {IoIosColorPalette} from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='navbar' id='navbar'>
            <div className="container nav-container">
                <a href="https://mostafasaleh1.github.io/myprofile" className='nav-logo'>
                    <img src={logo} alt="Logo" />
                </a>
                <ul className='nav-menu'>
                    <li><a href="#home" title='Home'>Home</a></li>
                    <li><a href="#about" title='About'>About</a></li>
                    <li><a href="#services" title='Services'>Services</a></li>
                    <li><a href="#portfolio" title='Portfolio'>Portfolio</a></li>
                    <li><a href="#contact" title='Contact'>Contact</a></li>
                </ul>
                <button id='theme-icon'><IoIosColorPalette /></button>
            </div>
        </nav>
    )
}

export default Navbar;
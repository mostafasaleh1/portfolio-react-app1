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
                    <li key={1}><a href="#home" title='Home'>Home</a></li>
                    <li key={2}><a href="#about" title='About'>About</a></li>
                    <li key={3}><a href="#services" title='Services'>Services</a></li>
                    <li key={4}><a href="#portfolio" title='Portfolio'>Portfolio</a></li>
                    <li key={5}><a href="#contact" title='Contact'>Contact</a></li>
                </ul>
                <button id='theme-icon'><IoIosColorPalette /></button>
            </div>
        </nav>
    )
}

export default Navbar;
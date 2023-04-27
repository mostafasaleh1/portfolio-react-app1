import React from 'react';
import HeaderImage from "../../assets/header.jpg"
import "./header.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header" id="header">
            <div className='container header-container'>
                <div className="header-profile">
                    <img src={HeaderImage} alt="Header img" />
                </div>
                <h3>John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae ea modi eligendi officia sit, odio hic dolorem odit voluptates facere debitis! Fuga, beatae id.</p>
                <div className="header-cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header-socials">
                    <a href="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
                    <a href="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><AiOutlineTwitter /></a>
                    <a href="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><BsFacebook /></a>
                    <a href="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><AiOutlineGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
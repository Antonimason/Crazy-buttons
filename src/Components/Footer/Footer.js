import React from 'react';
import './Footer.css';
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import Yo from '../../Assets/yo.jpg'

function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer-info">
                    <div className="social-media-button">
                        <a href="https://www.instagram.com/anto_code9/" target="_blank"rel="noreferrer"id="instagram" className="social-box" title="Instagram"><SlSocialInstagram /></a>
                    </div>
                    <div className="social-media-button">
                        <a href="https://www.linkedin.com/in/antonio-giambra-castellanos-293148233/"target="_blank"rel="noreferrer"id="linkedin"className="social-box"title="Linkedin"><FaLinkedinIn /></a>
                    </div>
                    <div className="social-media-button">
                        <a href="https://github.com/Antonimason"target="_blank" rel="noreferrer" id="github" className="social-box" title="Github"><VscGithubAlt /></a>
                    </div>
                </div>
                <div className="footer-logo">
                    <img className="footer-picture" src={Yo} alt="Antonio Giambra"/>
                    <p className="footer-name">Antonio Giambra</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
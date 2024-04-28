import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer-info">Some Information</div>
                <div className="footer-copyright">Copyright</div>
                <div className="footer-logo">
                    <img className="footer-picture" src="antonio.jpg" alt="Antonio Giambra"/>
                    <p className="footer-name">Antonio Giambra</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
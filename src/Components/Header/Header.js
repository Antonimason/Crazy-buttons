import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { display, collapse } from '../../Redux/CrazyButton';
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";

function Header(){
    const dispatch = useDispatch();
    const isCollapseButton = useSelector(state => state.CreateButton.isCollapseButton);

    const showNavBar = () => {
        document.querySelector(".header-nav").classList.toggle("show");
    }
    const collapseNavBar = (container) =>{
        document.querySelector(`${container}`).classList.toggle("collapse");
    }
    return(
        <>
            <div className="header-container">
                <CiMenuBurger className="header-menu" onClick={()=>{showNavBar()}}/>
                <ul className="header-nav">
                    <li className="header-nav-button" onClick={()=>{dispatch(display("Home")); showNavBar()}}>Home</li>
                    <li className="header-nav-button" onClick={()=>{dispatch(display("Header")); showNavBar()}}>Header</li>
                    <li className="header-nav-button" onClick={()=>{dispatch(collapse("button"));collapseNavBar(".header-nav-sub")}}>
                        Button<span className="collapse-button">{isCollapseButton === false ? <LiaPlusSolid/> : <LiaMinusSolid/>}</span>
                    </li>
                    <ul className="header-nav-sub">
                            <li className="header-nav-button sub" onClick={()=>{dispatch(display("YourButton")); showNavBar()}}>Button List</li>
                            <li className="header-nav-button sub" onClick={()=>{dispatch(display("BuildButton")); showNavBar()}}>Build Button</li>
                    </ul>
                    <li className="header-nav-button">Footer</li>
                    <li className="header-nav-button">Carousel</li>
                </ul>
                <img src="" alt="" className="header-logo"/>
            </div>
        </>
    )
}

export default Header;
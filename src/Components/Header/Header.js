import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { display, collapse } from '../../Redux/CrazyButton';
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";
import CodeLog from '../../Kit/CodeLog';

function Header(){
    const dispatch = useDispatch();
    const isCollapseButton = useSelector(state => state.CreateButton.isCollapseButton);
    const codeLogContent = useSelector(state => state.codeLogRedux.contentData);
    const codeLogActive = useSelector(state => state.codeLogRedux.isActive);

    const showNavBar = () => {
        document.querySelector(".header-nav").classList.toggle("show");
    }
    const collapseNavBar = (container) =>{
        document.querySelector(`${container}`).classList.toggle("collapse");
    }

    const codeReview = () =>{
        if(codeLogActive){
            return <CodeLog htmlCode={codeLogContent.htmlCode} cssCode={codeLogContent.cssCode} jsCode={codeLogContent.jsCode} content={'.carousel-secondContent'}/>
        } else {
            return false;
        }
    }
    return(
        <>
            <div className="header">
                <div className="header-container">
                    <CiMenuBurger className="header-menu" onClick={()=>{showNavBar()}}/>
                    <ul className="header-nav">
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Home")); showNavBar()}}>Home</li>
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Header")); showNavBar()}}>Navbar</li>
                        <li className="header-nav-button" onClick={()=>{dispatch(collapse("button"));collapseNavBar(".header-nav-sub")}}>
                            Button<span className="collapse-button">{isCollapseButton === false ? <LiaPlusSolid/> : <LiaMinusSolid/>}</span>
                            <ul className="header-nav-sub">
                                <li className="header-nav-button sub" onClick={()=>{dispatch(display("YourButton")); showNavBar()}}>Button List</li>
                                <li className="header-nav-button sub" onClick={()=>{dispatch(display("BuildButton")); showNavBar()}}>Build Button</li>
                            </ul>
                        </li>
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Carousel")); showNavBar()}}>Carousel</li>
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Modal")); showNavBar()}}>Modal</li>
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Card")); showNavBar()}}>Card</li>
                        <li className="header-nav-button" onClick={()=>{dispatch(display("Loader")); showNavBar()}}>Loader</li>
                    </ul>
                    <img src="" alt="" className="header-logo"/>
                </div>
                {codeReview()}
            </div>
        </>
    )
}

export default Header;
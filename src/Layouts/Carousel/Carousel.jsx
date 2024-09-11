import React from 'react';
import CodeLog from "../../Kit/CodeLog";
import { useSelector, useDispatch } from 'react-redux';
import {forward, backward} from '../../Redux/CarouselRedux'
import './Carousel.css';
import myJson from '../../Redux/buttons.json';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {active, contentProvider} from '../../Redux/codeLogRedux';

function Carousel(){
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.carousel.currentPosition);
    const info = myJson.carousel[0].slides[counter];
    const code = myJson.carousel[0].slidesCode[0];
    const code2 = myJson.carousel[0].slidesCode[1];


      //-------------------Fuction to change forward the carousel images every 7 seconds-------------------//
    return(
        <>
        <div className="carouselLayout-container">
            <section className="carousel-container">
                <h3>Regular Carousel</h3>
                <article className="carousel-firstContent carousel-content">
                    <div className="carousel-firstConent-show">
                        <div className="carrousel1" id="container1">
                            <div className="back button-carousel" ><IoIosArrowBack className="backward" onClick={(e)=>{e.preventDefault();dispatch(backward(1))}}/></div>
                            <div className="carrousel-image">
                                <img className="picture" id={info.id} src={info.source} alt={info.name} />
                                <h4 className="carousel-title">{info.name}</h4>
                            </div>
                            <div className="forth button-carousel"><IoIosArrowForward className="forward" onClick={(e)=>{e.preventDefault();dispatch(forward(1))}}/></div>
                        </div>
                    </div>
                </article>
                <button className="mainButton" onClick={e=>{
                        e.preventDefault();
                        dispatch(active(true));
                        dispatch(contentProvider({
                            htmlCode:code.htmlCode,
                            cssCode:code.cssCode,
                            jsCode:code.jsCode
                            }))}}>Get Code</button>         
            </section>

            <section className="carousel-container">
                <h3>3D Rotating Carousel</h3>
                <article className="carousel-secondContent carousel-content">
                    <div className="carousel2">
                        <div className="carousel2-image"><span>First Slide</span></div>
                        <div className="carousel2-image"><span>Second Slide</span></div>
                        <div className="carousel2-image"><span>Third Slide</span></div>
                        <div className="carousel2-image"><span>Fourth Slide</span></div>
                        <div className="carousel2-image"><span>Fifth Slide</span></div>
                        <div className="carousel2-image"><span>Sixth Slide</span></div>
                        <div className="carousel2-image"><span>Seventh Slide</span></div>
                        <div className="carousel2-image"><span>eighth Slide</span></div>
                        <div className="carousel2-image"><span>Ninth Slide</span></div>
                    </div>
                </article>
                <button className="mainButton" onClick={e=>{
                        e.preventDefault();
                        dispatch(active(true));
                        dispatch(contentProvider({
                            htmlCode:code2.htmlCode,
                            cssCode:code2.cssCode,
                            jsCode:code2.jsCode
                            }))}}>Get Code</button>
            </section>
            </div>            
        </>
    )
}

export default Carousel;
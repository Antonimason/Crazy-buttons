import React from 'react';
import CodeLog from "../../Kit/CodeLog";
import { useSelector, useDispatch } from 'react-redux';
import {forward, backward} from '../../Redux/CarouselRedux'
import './Carousel.css';
import myJson from '../../Redux/buttons.json';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";;

function Carousel(){
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.carousel.currentPosition);
    const info = myJson.carousel[0].slides[counter];
    const code = myJson.carousel[0].slidesCode[0];
    const code2 = myJson.carousel[0].slidesCode[1];



      //-------------------Fuction to change forward the carousel images every 7 seconds-------------------//
    return(
        <>
            <section className="carousel-container">

                <article className="carousel-firstContent carousel-content">
                    <h3>Regular Carousel</h3>
                    <div className="carousel-firstConent-show">
                        <div className="carrousel" id="container1">
                            <div className="back button-carousel" ><IoIosArrowBack className="backward" onClick={(e)=>{e.preventDefault();dispatch(backward(1))}}/></div>
                            <div className="carrousel-image">
                                <img className="picture" id={info.id} src={info.source} alt={info.name} />
                                <h3 className="carousel-title">{info.name}</h3>
                            </div>
                            <div className="forth button-carousel"><IoIosArrowForward className="forward" onClick={(e)=>{e.preventDefault();dispatch(forward(1))}}/></div>
                        </div>
                    </div>
                    <CodeLog htmlCode={code.htmlCode} cssCode={code.cssCode} jsCode={code.jsCode} content={'.carousel-firstContent'}/>
                </article>

            </section>

            <section className="carousel-container">
                <h3>3D Rotating Carousel</h3>
                <article className="carousel-secondContent carousel-content">
                    <div className="carousel">
                        <div className="image"><span>First Slide</span></div>
                        <div className="image"><span>Second Slide</span></div>
                        <div className="image"><span>Third Slide</span></div>
                        <div className="image"><span>Fourth Slide</span></div>
                        <div className="image"><span>Fifth Slide</span></div>
                        <div className="image"><span>Sixth Slide</span></div>
                        <div className="image"><span>Seventh Slide</span></div>
                        <div className="image"><span>eighth Slide</span></div>
                        <div className="image"><span>Ninth Slide</span></div>
                    </div>
                    <div className="spacer"></div>
                    <CodeLog htmlCode={code2.htmlCode} cssCode={code2.cssCode} jsCode={false} content={'.carousel-secondContent'}/>
                </article>
            </section>
        </>
    )
}

export default Carousel;
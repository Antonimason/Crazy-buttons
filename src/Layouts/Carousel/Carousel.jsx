import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {forward, backward, copied, clipboard } from '../../Redux/CarouselRedux'
import './Carousel.css';
import myJson from '../../Redux/buttons.json';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel(){
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.carousel.currentPosition);
    const info = myJson.carousel[0].slides[counter];
    const code = myJson.carousel[0].slidesCode[0];

      //-------------------Fuction to change forward the carousel images every 7 seconds-------------------//
    return(
        <>
            <section className="carousel-container">

                <article className="carousel-firstContent">
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
                    <div className="carousel-htmlContainer">
                        <p>HTML</p>
                        <p>{code.htmlCode}</p>
                        <button>Copy</button>
                    </div>
                    <div className="carousel-htmlContainer">
                        <p>CSS</p>
                        <p>{code.cssCode}</p>
                        <button>Copy</button>
                    </div>
                    <div className="carousel-htmlContainer">
                        <p>JavaScript</p>
                        <p>{code.jsCode}</p>
                        <button>Copy</button>
                    </div>
                </article>

            </section>
        </>
    )
}

export default Carousel;
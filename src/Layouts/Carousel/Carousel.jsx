import React from 'react';
import './Carousel.css';
import myJson from '../../Redux/buttons.json';
import CarouselContainer from '../../Components/Carousel/CarouselContainer'

function Carousel(){
    const code = myJson.carousel[0].slidesCode[0];
    const code2 = myJson.carousel[0].slidesCode[1];
    const code3 = myJson.carousel[0].slidesCode[2];
    const code4 = myJson.carousel[0].slidesCode[3];


      //-------------------Fuction to change forward the carousel images every 7 seconds-------------------//
    return(
        <>
        <div className="carouselLayout-container">
            <CarouselContainer key={code.id} stylefix={code.cssCode} htmlCode={code.htmlCode} jsCode={code.jsCode} author={code.author} carouselName="Automatic Carousel" />
            <CarouselContainer key={code2.id} stylefix={code2.cssCode} htmlCode={code2.htmlCode} jsCode={code2.jsCode} author={code2.author} carouselName="Automatic Carousel" />
            <CarouselContainer key={code3.id} stylefix={code3.cssCode} htmlCode={code3.htmlCode} jsCode={code3.jsCode} author={code3.author} carouselName="Automatic Carousel" />
            <CarouselContainer key={code4.id} stylefix={code4.cssCode} htmlCode={code4.htmlCode} jsCode={code4.jsCode} author={code4.author} carouselName="Automatic Carousel" />
            </div>            
        </>
    )
}

export default Carousel;
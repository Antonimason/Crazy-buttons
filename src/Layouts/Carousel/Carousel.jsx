import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {forward, backward} from '../../Redux/CarouselRedux'
import {copy, clipboards} from '../../Redux/CopyCode'
import './Carousel.css';
import myJson from '../../Redux/buttons.json';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel(){
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.carousel.currentPosition);
    const info = myJson.carousel[0].slides[counter];
    const code = myJson.carousel[0].slidesCode[0];

    const showLanguageContainer = (key) =>{
        let htmlContainer = document.querySelector('.html');
        let cssContainer = document.querySelector('.css');
        let jsContainer = document.querySelector('.js');
        switch(key){
            case "html":
                htmlContainer.style.display = 'flex';
                cssContainer.style.display = 'none';
                jsContainer.style.display = 'none';
                break;
            case "css":
                htmlContainer.style.display = 'none';
                cssContainer.style.display = 'flex';
                jsContainer.style.display = 'none';
                break;
            case "js":
                htmlContainer.style.display = 'none';
                cssContainer.style.display = 'none';
                jsContainer.style.display = 'flex';
                break;
            default:
                return;
        }
    }

    function formatCssCode(text){
        let formattedText = text.replace(/;/g, ';\n  ');

        formattedText = formattedText.replace(/{/g, '{\n  ');

        formattedText = formattedText.replace(/}/g, '}\n\n');

        return formattedText
    }

    function formatJavaScriptCode(text) {
        let formattedText = text.replace(/\/\*([\s\S]*?)\*\//g, match => {
            // Mantener los comentarios multilinea
            return match.replace(/\n\s*\*\s*/g, '\n  '); // Agregar dos espacios después de cada * en los comentarios
        });
    
        formattedText = formattedText.replace(/(\/\/[^\n]*)/g, match => {
            // Manejar comentarios de una sola línea
            return match.replace(/\n/g, '\n  '); // Agregar dos espacios después de cada salto de línea en los comentarios de una sola línea
        });
        
        formattedText = formattedText.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, match => {
            // Manejar cadenas de texto
            return match.replace(/\n/g, '\n  '); // Agregar dos espacios después de cada salto de línea dentro de las cadenas de texto
        });
    
        formattedText = formattedText.replace(/(;|{|})/g, match => {
            // Agregar dos espacios al principio de cada línea después de los puntos y comas, llaves de apertura y llaves de cierre
            return match + '\n  ';
        });
    
        return formattedText;
    }

    

    function formatHTMLCode(html) {
        let formattedHTML = '';
        let indentationLevel = 0;
    
        html.split(/(<[^>]*>)/).forEach((part) => {
            if (part.startsWith('<') && part.endsWith('>')) {
                if (part.startsWith('</')) {
                    indentationLevel -= 1;
                }
                formattedHTML += '\n' + '  '.repeat(indentationLevel) + part.trim();
                if (!part.startsWith('</')) {
                    indentationLevel += 1;
                }
            } else {
                if (part.trim() !== '') {
                    formattedHTML += part.trim();
                }
            }
        });
    
        return formattedHTML.trim();
    }

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
                    <div className="carousel-languageButtons">
                        <button onClick={()=>showLanguageContainer("html")}>HTML</button>
                        <button onClick={()=>showLanguageContainer("css")}>CSS</button>
                        <button onClick={()=>showLanguageContainer("js")}>JavaScript</button>
                    </div>
                    <div className="carousel-htmlContainer html">
                        <button onClick={(e)=>{dispatch(copy(code.htmlCode));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                        <pre><code className="language-css">
                            {formatHTMLCode(code.htmlCode)};
                        </code></pre>
                    </div>
                    <div className="carousel-htmlContainer css">
                        <button onClick={(e)=>{dispatch(copy(code.cssCode));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                        <pre><code className="language-css">
                            {formatCssCode(code.cssCode)};
                        </code></pre>
                    </div>
                    <div className="carousel-htmlContainer js">
                        <button onClick={(e)=>{dispatch(copy(code.jsCode));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                        <pre className="pre"><code className="language-css">
                            {formatJavaScriptCode(code.jsCode)}
                        </code></pre>
                    </div>
                </article>

            </section>
        </>
    )
}

export default Carousel;
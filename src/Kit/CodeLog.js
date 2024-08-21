import React from 'react'
import { useDispatch } from 'react-redux';
import {copy, clipboards} from '../Redux/CopyCode'
import './codeLog.css'
import * as Formater from'./Formater'

function CodeLog(props) {

    const {htmlCode,cssCode,jsCode,content} = props
    const dispatch = useDispatch();

    const showLanguageContainer = (key, carouselContainer) =>{
        console.log(carouselContainer);
        let htmlContainer = carouselContainer.querySelector('.html');
        let cssContainer = carouselContainer.querySelector('.css');
        let jsContainer = carouselContainer.querySelector('.js');
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

    return(
        <>
            <div className="carousel-languageButtons">
                <button className="buttonAnimation" onClick={(e)=>showLanguageContainer("html",e.target.closest(content))}>HTML</button>
                <button className="buttonAnimation" onClick={(e)=>showLanguageContainer("css",e.target.closest(content))}>CSS</button>
                <button className="buttonAnimation" onClick={(e)=>showLanguageContainer("js",e.target.closest(content))}>JavaScript</button>
            </div>
            <div className="carousel-htmlContainer html">
                <button onClick={(e)=>{dispatch(copy(Formater.formatHTMLCode(htmlCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                <pre><code className="language-css">
                    {Formater.formatHTMLCode(htmlCode)};
                </code></pre>
            </div>
            <div className="carousel-htmlContainer css">
                <button onClick={(e)=>{dispatch(copy(Formater.formatCssCode(cssCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                <pre><code className="language-css">
                    {Formater.formatCssCode(cssCode)};
                </code></pre>
            </div>
            <div className="carousel-htmlContainer js">
                <button onClick={(e)=>{dispatch(copy(Formater.formatJavaScriptCode(jsCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                <pre className="pre"><code className="language-css">
                    {jsCode !== false ? Formater.formatJavaScriptCode(jsCode) : false};
                </code></pre>
            </div>
        </>
    )
}

export default CodeLog;
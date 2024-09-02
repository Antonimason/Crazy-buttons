import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {copy, clipboards} from '../Redux/CopyCode'
import {languaje, active} from '../Redux/codeLogRedux'
import './codeLog.css'
import * as Formater from'./Formater'

function CodeLog(props) {

    const {htmlCode,cssCode,jsCode} = props
    const dispatch = useDispatch();
    const languajeShown = useSelector(state => state.codeLogRedux.languajeSelected)
    console.log(cssCode)

    return(
        <>
            <div className="codeLog-container">
                <div className="codeLog-box">
                    <div className="carousel-languageButtons">
                        <div className="codeLog-button-container">
                            <button className="mainButton" onClick={(e)=>{dispatch(languaje("html"))}}>HTML</button>
                            <button className="mainButton" onClick={(e)=>{dispatch(languaje("css"))}}>CSS</button>
                            <button className="mainButton" onClick={(e)=>{dispatch(languaje("js"))}}>JavaScript</button>
                        </div>
                        <div className="codeLog-button-container">
                            <button className="mainButton" onClick={(e)=>{dispatch(active(false));dispatch(languaje("html"))}}>Close</button>
                        </div>
                    </div>
                    {languajeShown === "html" && (
                        <div className="carousel-htmlContainer html">
                            <div className="codeLog-copy-container">
                            <button className="mainButton copyButton" onClick={(e)=>{dispatch(copy(Formater.formatHTMLCode(htmlCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                            </div>
                            <pre><code className="language-css">
                                {Formater.formatHTMLCode(htmlCode)};
                            </code></pre>
                        </div>
                    )

                    }
                    {languajeShown === "css" && (<div className="carousel-htmlContainer css">
                        <div className="codeLog-copy-container">
                            <button className="mainButton copyButton" onClick={(e)=>{dispatch(copy(Formater.formatCssCode(cssCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                        </div>
                        <pre><code className="language-css">
                            {Formater.formatCssCode(cssCode)};
                        </code></pre>
                    </div>)}
                    {languajeShown === "js" && (
                        <div className="carousel-htmlContainer js">
                            <div className="codeLog-copy-container">
                                <button className="mainButton copyButton" onClick={(e)=>{dispatch(copy(Formater.formatJavaScriptCode(jsCode)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                            </div>
                            <pre className="pre"><code className="language-css">
                                {jsCode !== false ? Formater.formatJavaScriptCode(jsCode) : false};
                            </code></pre>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CodeLog;
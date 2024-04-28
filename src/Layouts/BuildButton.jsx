import React from 'react';
import "./BuildButton.css"
import { useSelector, useDispatch } from 'react-redux';
import { pYValue, pXValue, nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold,isItalic,isBorder,borderColor,borderSize,toUpcase,isShadow,XShadow,YShadow,blur,spread,shadowColor } from '../Redux/builtButton'
function BuildButton () {
    
    const dispatch = useDispatch();
    const list = useSelector(state=> state.zise.list);
    return (
        <>
        <div className="buildbutton">
            
            <div className="buildbutton__text buildbutton-container">

                <h3 className="title">TEXT STYLE</h3>

                <div className="input-container">
                    <label htmlFor="buttonText">Button Text</label>
                    <input id="buttonText" name="buttontext" type="text" onChange={(e) => {dispatch(nameButton(e.target.value))}}/>
                </div>


                <div className="input-container">
                    <label htmlFor="fontFamilySelect">Font-Family</label>
                    <select id="fontFamilySelect" onChange={(e) => {dispatch(fontfamily(e.target.value))}}>
                        <option value="Arial">Arial</option>
                        <option value="Calibri">Calibri</option>
                        <option value="Time New Roman">Time New Roman</option>
                        <option value="Monospace">Monospace</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Impact">Impact</option>
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="fontSizeRange">Font-Size</label>
                    <p className="text__amount">{list.size}</p>
                    <input id="fontSizeRange" name="fontsize" type="range" min='20' max='60' onChange={(e) => {dispatch(fontsize(e.target.value))}}/>
                </div>

                <div className="text__inline">
                    <div className="input-container">
                        <label htmlFor="boldCheckbox">Bold?</label>
                        <input id="boldCheckbox" type="checkbox" onChange={(e) => {e.target.checked ? dispatch(isBold(true)) : dispatch(isBold(false))}}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="italicCheckbox">Italic?</label>
                        <input id="italicCheckbox" type="checkbox" onChange={(e) => {e.target.checked ? dispatch(isItalic(true)) : dispatch(isItalic(false))}}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="uppercaseCheckbox">Uppercase?</label>
                        <input id="uppercaseCheckbox" type="checkbox" onChange={(e) => {e.target.checked ? dispatch(toUpcase(true)) : dispatch(toUpcase(false))}}/>
                    </div>
                </div>
                

            </div>
            
            <div className="buttonbuild__sizing buildbutton-container">
                <h3 className="title">BUTTON SIZE</h3>
                <div className="input-container">
                    <label htmlFor="verticalSizing">Vertical sizing</label>
                    <p className="text__amount">{list.padding[0]}</p>
                    <input id="verticalSizing" name="padding" type="range" min='0' max='40' onChange={(e) => {dispatch(pYValue(e.target.value))}}/>
                </div>
                <div className="input-container">
                    <label htmlFor="horizontalSizing">Horizontal sizing</label>
                    <p className="text__amount">{list.padding[1]}</p>
                    <input id="horizontalSizing" name="padding" type="range" min='0' max='40' onChange={(e) => {dispatch(pXValue(e.target.value))}}/>
                </div>
                <div className="input-container">
                    <label htmlFor="cornerRadius">Corner Radius</label>
                    <p className="text__amount">{list.radius}</p>
                    <input id="cornerRadius" type="range" min="0" max="50" onChange={(e) => {dispatch(rad(e.target.value))}}/>
                </div>

            </div>

            <div className="buildbutton__colour buildbutton-container">
                <h3 className="title">BUTTON COLOUR</h3>
                <div className="input-container">
                    <label htmlFor="textColor">Text Colour</label>
                    <input id="textColor" type="color" value={list.color} onChange={(e)=>{dispatch(fontcolor(e.target.value))}}/>
                </div>
                <div className="input-container">
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input id="backgroundColor" type="color" value={list.background} onChange={(e)=>{dispatch(bgcolor(e.target.value))}}/>
                </div>
            </div>

            <div className="buildbutton__extras buildbutton-container">

                <h3 className="title">EXTRA</h3>

                <div className="buildbutton__border">
                    <label>Border?<button onClick={(e)=>{e.preventDefault(); !list.onOffBorder ? dispatch(isBorder(true)) : dispatch(isBorder(false))}}>+</button></label>
                    <div className="buildbutton__borderstyle" style={list.onOffBorder ? {display: "flex"} : {display:"none"}}>
                        <div className="input-container">
                            <label htmlFor="borderColor">Border Color</label>
                            <input id="borderColor" type="color" value={list.border[1]} onChange={(e)=>{dispatch(borderColor(e.target.value))}}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="borderSize">Border Size</label>
                            <p className="text__amount">{list.border[0]}</p>
                            <input id="borderSize" type="range" min='0' max='20' onChange={(e) =>{dispatch(borderSize(e.target.value))}}/>
                        </div>
                    </div>
                </div>

                <div className="buildbutton__shadow">
                         
                    <label>Shadow?<button onClick={(e)=>{e.preventDefault(); !list.onoffShadow ? dispatch(isShadow(true)) : dispatch(isShadow(false))}}>+</button></label>
                    <div className="buildbutton-shadow-sub" style={list.onoffShadow ? {display: "flex"} : {display:"none"}}>
                        <div className="input-container">
                            <label htmlFor="verticalPosition">Vertical Position</label>
                            <p className="text__amount">{list.boxShadow[0]}</p>
                            <input id="verticalPosition" type="range" min='-50' max='50' onChange={(e) =>{dispatch(XShadow(e.target.value))}}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="horizontalPosition">Horizontal Position</label>
                            <p className="text__amount">{list.boxShadow[1]}</p>
                            <input id="horizontalPosition" type="range" min='-50' max='50' onChange={(e) =>{dispatch(YShadow(e.target.value))}}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="blur">Blur</label>
                            <p className="text__amount">{list.boxShadow[2]}</p>
                            <input id="blur" type="range" min="0" max="20" onChange={(e)=>{dispatch(blur(e.target.value))}}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="spreadRadius">Spread Radius</label>
                            <p className="text__amount">{list.boxShadow[3]}</p>
                            <input id="spreadRadius" type="range" min="-10" max="10" onChange={(e)=>{dispatch(spread(e.target.value))}}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="shadowColor">Shadow Color</label>
                            <input id="shadowColor" type="color" value={list.boxShadow[4]} onChange={(e)=>{dispatch(shadowColor(e.target.value))}}/>
                        </div>
                    </div>

                </div>

            </div>
            </div>
            <div className="myButton">
                <button className="mybutton__prototype" 
                    style={{fontSize: list.size,
                            fontFamily: list.family, 
                            width: list.width, 
                            height: list.height, 
                            padding: list.padding.join(" "),
                            color:list.color,
                            backgroundColor:list.background,
                            borderRadius:list.radius,
                            fontWeight:list.bold,
                            fontStyle:list.italic,
                            border:list.border.join(" "),
                            textTransform:list.Upcase,
                            boxShadow:list.boxShadow.join(" "),
                        }}
                >{list.name}</button>
                <button className="myButton-style">Copy CSS</button>
            </div>
            </>
    )
}

export default BuildButton
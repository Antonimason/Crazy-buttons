import React from 'react';
import "./BuildButton.css"
import { useSelector, useDispatch } from 'react-redux';
import { pYValue, pXValue, nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold,isItalic,isBorder,borderColor,borderSize,toUpcase,isShadow,XShadow,YShadow,blur,spread,shadowColor } from '../Redux/builtButton'
function BuildButton () {

    const dispatch = useDispatch();
    const list = useSelector(state=> state.zise.list)
    return (
        <div className="buildbutton">
            <div className="buildbutton__text">
                <h3 className="title">TEXT STYLE</h3>
                <label>Button Text
                <input name="buttontext" type="text" onChange={(e) =>{dispatch(nameButton(e.target.value))}}/></label>

                <label>Font-Family<select onChange={(e) => {dispatch(fontfamily(e.target.value))}}>
                    <option value="Arial">Arial</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Time New Roman">Time New Roman</option>
                    <option value="Monospace">Monospace</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Impact">Impact</option>
                </select></label>

                <label>Font-Size<input name="fontsize" type="number" min='25' max='60' onChange={(e) =>{dispatch(fontsize(e.target.value))}}/></label>
                <div className="text__inline">
                    <label>Bold?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isBold(true)) : dispatch(isBold(false))}}/></label>
                    <label>Italic?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isItalic(true)) : dispatch(isItalic(false))}}/></label>
                    <label>Uppercase?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(toUpcase(true)) : dispatch(toUpcase(false))}}/></label>
                </div>
                

            </div>
            <div className="buttonbuild__sizing">
                <h3 className="title">BUTTON SIZE</h3>
                <label>Vertical sizing
                <input name="padding" type="range" min='0' max='40'  onChange={(e) =>{dispatch(pYValue(e.target.value))}}/></label>
                <label>Horizontal sizing
                <input name="padding" type="range" min='0' max='40'  onChange={(e) =>{dispatch(pXValue(e.target.value))}}/></label>
                <label>Corner Radius<input type="number" min="0" max="50" onChange={(e)=>{dispatch(rad(e.target.value))}}/></label>
            </div>

            <div className="buildbutton__colour">
                <h3 className="title">BUTTON COLOUR</h3>
                <label>Text Colour<input type="color" onChange={(e)=>{dispatch(fontcolor(e.target.value))}}/></label>
                <label>Background Color<input type="color" onChange={(e)=>{dispatch(bgcolor(e.target.value))}}/></label>
            </div>

            <div className="buildbutton__extras">

                <h3 className="title">EXTRA</h3>

                <div className="buildbutton__border">
                    <label>Border?<button onClick={(e)=>{e.preventDefault(); !list.onOffBorder ? dispatch(isBorder(true)) : dispatch(isBorder(false))}}>+</button></label>
                    <div className="buildbutton__borderstyle" style={list.onOffBorder ? {display: "flex"} : {display:"none"}}>
                        <label>Border Color<input type="color" onChange={(e)=>{dispatch(borderColor(e.target.value))}}/></label>
                        <label>Border Size<input  type="number" min='0' max='20' onChange={(e) =>{dispatch(borderSize(e.target.value))}}/></label>
                    </div>
                </div>

                <div className="buildbutton__shadow">

                    <label>Shadow?<button onClick={(e)=>{e.preventDefault(); !list.onoffShadow ? dispatch(isShadow(true)) : dispatch(isShadow(false))}}>+</button></label>
                    <div style={list.onoffShadow ? {display: "flex"} : {display:"none"}}>

                        <label>Vertical Position<input  type="range" min='-50' max='50' onChange={(e) =>{dispatch(XShadow(e.target.value))}}/>{list.boxShadow[0]}</label>
                        <label>Horizontal Position<input  type="range" min='-50' max='50' onChange={(e) =>{dispatch(YShadow(e.target.value))}}/>{list.boxShadow[1]}</label>
                        <label>Blur<input type="number" min="0" max="80" onChange={(e)=>{dispatch(blur(e.target.value))}}/></label>
                        <label>Spread Radius<input type="number" min="0" max="10" onChange={(e)=>{dispatch(spread(e.target.value))}}/></label>
                        <label>Shadow Color<input type="color" onChange={(e)=>{dispatch(shadowColor(e.target.value))}}/></label>

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
                <p>Embed</p>
            </div>
        </div>
    )
}

export default BuildButton
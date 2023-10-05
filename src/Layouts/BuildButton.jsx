import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pYValue, pXValue, nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold,isItalic,isBorder,borderColor,borderSize } from '../Redux/builtButton'
function BuildButton () {

    const dispatch = useDispatch();
    const list = useSelector(state=> state.zise.list)
    return (
        <div className="buildbutton">
            <div>
                <label>Button Text
                <input name="buttontext" type="text" onChange={(e) =>{dispatch(nameButton(e.target.value))}}/></label>
            </div>
            <div>
                <label>Font<select onChange={(e) => {dispatch(fontfamily(e.target.value))}}>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Monospace">Monospace</option>
                </select></label>

                <label>Font-Size<input name="fontsize" type="number" min='25' max='60' onChange={(e) =>{dispatch(fontsize(e.target.value))}}/></label>
                <label>Color<input type="color" onChange={(e)=>{dispatch(fontcolor(e.target.value))}}/></label>
                <label>Background Color<input type="color" onChange={(e)=>{dispatch(bgcolor(e.target.value))}}/></label>
                <label>Corner Radius<input type="number" min="0" max="50" onChange={(e)=>{dispatch(rad(e.target.value))}}/></label>
                <label>Bold?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isBold(true)) : dispatch(isBold(false))}}/></label>
                <label>Italic?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isItalic(true)) : dispatch(isItalic(false))}}/></label>
                <div>
                    <label>Border?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isBorder(true)) : dispatch(isBorder(false))}}/></label>
                    <div style={list.onOffBorder ? {display: "flex"} : {display:"none"}}>
                        <label>Border Color<input type="color" onChange={(e)=>{dispatch(borderColor(e.target.value))}}/></label>
                        <label>Border Size<input  type="number" min='1' max='10' onChange={(e) =>{dispatch(borderSize(e.target.value))}}/></label>
                    </div>
                </div>
                <div>
                    <label>Shadow?<input type="checkbox" onChange={(e)=>{e.target.checked ? dispatch(isBorder(true)) : dispatch(isBorder(false))}}/></label>
                    <div style={list.onOffBorder ? {display: "flex"} : {display:"none"}}>
                        <label>Shadow Color<input type="color" onChange={(e)=>{dispatch(borderColor(e.target.value))}}/></label>
                        <label>Shadow Size<input  type="number" min='1' max='10' onChange={(e) =>{dispatch(borderSize(e.target.value))}}/></label>
                        <label>Orientation:<select onChange={(e) => {dispatch(fontfamily(e.target.value))}}>
                            <option value="north">North</option>
                            <option value="Calibri">South</option>
                            <option value="Ubuntu">East</option>
                            <option value="Roboto">West</option>
                            <option value="Monospace">North-East</option>
                            <option value="Monospace">North-West</option>
                            <option value="Monospace">South-East</option>
                            <option value="Monospace">South-West</option>
                        </select></label>
                    </div>
                </div>
            </div>
            <div>
                <label>Vertical sizing
                <input name="padding" type="number" min='0' max='40'  onChange={(e) =>{dispatch(pYValue(e.target.value))}}/></label>
                <label>Horizontal sizing
                <input name="padding" type="number" min='0' max='40'  onChange={(e) =>{dispatch(pXValue(e.target.value))}}/></label>
            </div>
            <div>
                <button className="hola" 
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
                            border:list.borderSize,
                            borderColor:list.borderColor}}
                >{list.name}</button>
            </div>
        </div>
    )
}

export default BuildButton
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pYValue, pXValue, nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold } from '../Redux/builtButton'
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

                <label>Font-Size<input name="fontsize" type="number" min='10' max='50' onChange={(e) =>{dispatch(fontsize(e.target.value))}}/></label>
                <label>Color<input type="color" onChange={(e)=>{dispatch(fontcolor(e.target.value))}}/></label>
                <label>Background Color<input type="color" onChange={(e)=>{dispatch(bgcolor(e.target.value))}}/></label>
                <label>Corner Radius<input type="number" min="0" max="50" onChange={(e)=>{dispatch(rad(e.target.value))}}/></label>
                <label>Bold?<input type="checkbox" onChange={(e)=>{dispatch(fontcolor(e.target.value))}}/></label>
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
                            fontWeight:list.bold}}>{list.name}</button>
            </div>
        </div>
    )
}

export default BuildButton
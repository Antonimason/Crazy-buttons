import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wValue, hValue, pValue } from '../Redux/builtButton'
function BuildButton () {

    const dispatch = useDispatch();
    const list = useSelector(state=> state.zise.list)

    const obj = {

    }
    return (
        <div className="buildbutton">

            <input type="range" min={35} max={200} onChange={(e) =>{dispatch(wValue(e.target.value))}}></input>
            <input type="range" min={20} max={100} onChange={(e) =>{dispatch(hValue(e.target.value))}}></input>
            <input type="range" min={5} max={40} onChange={(e) =>{dispatch(pValue(e.target.value))}}></input>
            <div>
                <button style={{width: list.width, height: list.height, padding: list.padding}}>Click</button>
            </div>
        </div>
    )
}

export default BuildButton
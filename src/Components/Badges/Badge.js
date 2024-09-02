import './Badge.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import {active, contentProvider} from '../../Redux/codeLogRedux';

function Badge(props){

    const dispatch = useDispatch();

    return (
        <>
            <div className='badge-container'>
                <div className='badge-image'>
                    {props.button}
                </div>

                <div className='badge-buttons'>
                <button className="mainButton" onClick={e=>{
                        e.preventDefault();
                        dispatch(active(true));
                        dispatch(contentProvider({
                            htmlCode:props.button.props.htmlCode,
                            cssCode:props.button.props.stylefix,
                            jsCode:false
                            }))}}>Get Code</button>
                    
                </div>
                
            </div>
        </>
    )
}

export default Badge;
import './Badge.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { copy, clipboards} from '../../Redux/CopyCode';
import * as Formater from "../../Kit/Formater"

function Badge(props){

    const dispatch = useDispatch();

    return (
        <>
            <div className='badge-container'>
                <div className='badge-image'>
                    {props.button}
                </div>

                <div className='badge-buttons'>
                    <button className='badge-button' onClick={(e)=>{dispatch(copy(Formater.formatCssCode(props.button.props.stylefix)));dispatch(clipboards(true));setTimeout(()=>{dispatch(clipboards(false))},3000)}}>Copy</button>
                </div>
                
            </div>
        </>
    )
}

export default Badge;
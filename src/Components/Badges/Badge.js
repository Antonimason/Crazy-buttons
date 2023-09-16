import './Badge.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { copy } from '../../Redux/buttonSelection';

function Badge(props){
    const dispatch = useDispatch();
    const copied = useSelector(state=> state.buttons.copied)

    return (
        <>
            <div className='badge-container'>
                <div className='badge-image'>
                    {props.button}
                </div>
                <button className='badge-button' onClick={()=>{dispatch(copy(props.button.props.stylefix))}}>Copy</button>
            </div>
        </>
    )
}

export default Badge;
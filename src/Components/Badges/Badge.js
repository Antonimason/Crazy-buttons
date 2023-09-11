import './Badge.css';
import React from 'react';

function Badge(props){
    return (
        <>
            <div className='badge-container'>
                <div className='badge-image'>
                    {props.button}
                </div>
                <button className='badge-button'>Copy</button>
            </div>
        </>
    )
}

export default Badge;
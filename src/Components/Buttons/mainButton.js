import React from 'react';
import './CreateButton.css';

function mainButton(props){
    const {content} = props

    return(
        <>
        <button className="mainButton">{content}</button>
        </>
    )
}

export default mainButton;
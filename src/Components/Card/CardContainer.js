import React from "react";
import './Card.css'
import { useDispatch } from 'react-redux';
import {active, contentProvider} from '../../Redux/codeLogRedux';
function CardContainer (props){

    const {keya, stylefix, htmlCode, jsCode, author} = props;
    const dispatch = useDispatch();
    return (
    <>
        <style>{stylefix}</style>
        <div className='createCardContainer-container'>
            <div key={keya} className="createCardContainer" dangerouslySetInnerHTML={{ __html: htmlCode }} />
            <div className='createCardContainer-author'>By {author}</div>
            <button className="mainButton" onClick={e=>{
                            e.preventDefault();
                            dispatch(active(true));
                            dispatch(contentProvider({
                                htmlCode:htmlCode,
                                cssCode:stylefix,
                                jsCode:jsCode
                                }))}}>Get Code</button> 
        </div>
        {jsCode ? <script src={jsCode}></script> : null}
    </>
    )
}

export default CardContainer
import React from "react";
import { useDispatch } from 'react-redux';
import {active, contentProvider} from '../../Redux/codeLogRedux';
import './CarouselContainer.css'
function CarouselContainer (props){

    const {keya, stylefix, htmlCode, jsCode, author, carouselName} = props;

    const dispatch = useDispatch();
    return (
    <>
        <style>{stylefix}</style>
        <div className='carouselContainer-container'>
            <h3>{carouselName}</h3>
            <div key={keya} className="carouselContainer" dangerouslySetInnerHTML={{ __html: htmlCode }}>
            </div>
            <div className='carousel-author'>By {author}</div>
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

export default CarouselContainer
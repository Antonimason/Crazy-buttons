import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { valor } from '../Redux/repositoryRedux';
import 'Accordion.css';

function AccordionLayout(props){
    // Initializing hooks for accessing state and dispatch function
    const dispatch = useDispatch();
    const list = useSelector(state=> state.repository.buttonList)
    const {keya, stylefix, htmlCode, jsCode, author, accordionName} = props;
    function renderAccordion(){

    }
    return (
        <>
            <style>{stylefix}</style>
            <div className='accordionContainer-container'>
                <h3>{accordionName}</h3>
                <div key={keya} className="accordionContainer" dangerouslySetInnerHTML={{ __html: htmlCode }}>
                </div>
                <div className='accordion-author'>By {author}</div>
                <button className="mainButton" onClick={e=>{
                                e.preventDefault();
                                dispatch(active(true));
                                dispatch(contentProvider({
                                    htmlCode:htmlCode,
                                    cssCode:stylefix,
                                    jsCode:jsCode
                                    }))}}>Get Code</button> 
            </div>
        </>
        )
}

export default AccordionLayout;
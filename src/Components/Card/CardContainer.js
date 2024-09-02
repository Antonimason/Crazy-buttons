import React from "react";
import './Card.css'
function CardContainer (props){

    const {stylefix, htmlCode} = props;
    return (
    <>
        <style>{stylefix}</style>
        <div className="createCardContainer" dangerouslySetInnerHTML={{ __html: htmlCode }} />
    </>
    )
}

export default CardContainer
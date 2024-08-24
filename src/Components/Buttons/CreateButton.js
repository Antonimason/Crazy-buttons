import React from "react";
import './CreateButton.css'
function CreateButton (props){

    const {stylefix, htmlCode} = props;
    return (
    <>
        <style>{stylefix}</style>
        <div className="createButtonContainer" dangerouslySetInnerHTML={{ __html: htmlCode }} />
    </>
    )
}

export default CreateButton
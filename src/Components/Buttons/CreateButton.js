import React from "react";

function CreateButton (props){
    return (<>
    <style>
        {props.stylefix}
    </style>
    <button 
        id={props.id}
    >Click</button>
    </>)
}

export default CreateButton
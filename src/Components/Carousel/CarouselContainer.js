import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {active, contentProvider} from '../../Redux/codeLogRedux';
import './CarouselContainer.css'
function CarouselContainer (props){

    const {keya, stylefix, htmlCode, jsCode, author, carouselName} = props;

    const dispatch = useDispatch();

        useEffect(() => {
            // Código JavaScript externo como una cadena
            const script = jsCode;
    
            // Crear un elemento <script> y agregar el código
            const scriptElement = document.createElement('script');
            scriptElement.textContent = script;
            document.body.appendChild(scriptElement);
    
            // Limpiar el elemento <script> después de desmontar el componente
            return () => {
                document.body.removeChild(scriptElement);
            };
        }, [jsCode]);
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
    </>
    )
}

export default CarouselContainer
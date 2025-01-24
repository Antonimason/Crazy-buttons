import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { active, contentProvider } from '../../Redux/codeLogRedux';
import './ModalContainer.css';

function ModalContainer(props) {
    const { keya, stylefix, htmlCode, jsCode, author, modalName } = props;
    const dispatch = useDispatch();
    
    // Estado para manejar la visibilidad del modal
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Si hay código JS, inyectarlo
        if (jsCode) {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = jsCode;
            document.body.appendChild(scriptElement);

            // Limpiar el script cuando el componente se desmonte
            return () => {
                document.body.removeChild(scriptElement);
            };
        }
    }, [jsCode]);

    // Función para mostrar el modal
    const showModal = () => {
        // Cambiar el estado a true para mostrar el modal
        setModalVisible(true);
        setTimeout(()=>{
            setModalVisible(false);
        },3000) // Cambiar el estado a true para mostrar el modal
    };


    return (
        <>
            <div className="modal-model model_1">
                <h3>{modalName}</h3>
                {/* Si el modal está visible, renderizamos el contenido del modal */}
                <div className="modal-container-model">
                {isModalVisible && (
                        <div key={keya} className="modal-content" dangerouslySetInnerHTML={{ __html: htmlCode }} />
                )}
                </div>
                {/* Botones */}
                <div className="modal-author">By {author}</div>
                <div className="modal-actions">
                    <button className="mainButton" onClick={showModal}>Try it</button>
                    <button className="mainButton" onClick={(e) => {
                        e.preventDefault();
                        dispatch(active(true));
                        dispatch(contentProvider({
                            htmlCode,
                            cssCode: stylefix,
                            jsCode: jsCode
                        }));
                    }}>Get Code</button>
                </div>
            </div>
        </>
    );
}

export default ModalContainer;
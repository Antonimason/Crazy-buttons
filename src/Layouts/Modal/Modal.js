import React, { useEffect, useCallback } from 'react';
import './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateModalContent} from '../../Redux/modalRedux';
import {active, contentProvider} from '../../Redux/codeLogRedux';
import buttonList from '../../Redux/buttons.json';

function Modal() {

    const dispatch = useDispatch();
    const modal = useSelector(state=> state.modals.modalShown);
    const code = buttonList.modal[0].modalCode[0]
    const code_2 = buttonList.modal[0].modalCode[1]

    // Memorizar la función `showDynamicModal` para evitar recreaciones innecesarias
    const showDynamicModal = useCallback((modalContent) => {
        const modalRoot = document.querySelector('.modalShownContainer');
        if (!modalRoot) {
            console.error("No se encontró '.modalShownContainer' en el DOM.");
            return;
        }

        // Eliminar el modal existente si está presente
        let existingModal = document.getElementById('child');
        if (existingModal) {
            modalRoot.removeChild(existingModal);
        }

        // Crear y añadir el nuevo modal
        const modalDiv = document.createElement('div');
        modalDiv.setAttribute('id', 'child');
        modalDiv.innerHTML = modalContent; // Asegúrate de que modalContent sea seguro
        modalRoot.appendChild(modalDiv);
    }, []);

    // Ejecuta la función showDynamicModal cada vez que el contenido del modal cambia
    useEffect(() => {
        if (modal) {
            showDynamicModal(modal);
        }
        // Limpia el estado al desmontar
        return () => {
            dispatch(updateModalContent(false)); // Resetea el contenido del modal
        };
    }, [modal,showDynamicModal, dispatch]);

    const showModal = (modalId) =>{
        // Forzar un "reinicio" del modal primero
        dispatch(updateModalContent('')); // Limpiar el contenido
        setTimeout(() => {
        dispatch(updateModalContent(buttonList.modal[0].modalCode[modalId].htmlCode))
        }, 0);
    }

    return(
        <>
            <div className="modalShownContainer"></div>
            <section className="modal-container">
                <article className="modal-model model_1">
                    <h3>Model 1</h3>
                    <div className="modal-model-try">  
                        <button className="modal-button" onClick={()=>{
                            showModal(0)}}>Try Yourself</button>
                        <button className="modal-button" onClick={e=>{
                        e.preventDefault();
                        dispatch(active(true));
                        dispatch(contentProvider({
                            htmlCode:code.htmlCode,
                            cssCode:code.cssCode,
                            jsCode:false
                            }))}}>Get Code</button>
                    </div>
                </article>
                <article className="modal-model model_2">
                    <h3>Model 2</h3>
                    <div className="modal-model-try">   
                        <button className="modal-button" onClick={()=>{
                            showModal(1)}}>Try Yourself</button>
                            <button className="modal-button" onClick={e=>{
                                e.preventDefault();
                                dispatch(active(true));
                                dispatch(contentProvider({
                                    htmlCode:code_2.htmlCode,
                                    cssCode:code_2.cssCode,
                                    jsCode:false
                                    }))}}>
                        Get Code</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Modal;
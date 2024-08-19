import React from 'react';
import './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateModalContent, modalStyle } from '../../Redux/modalRedux';
import buttonList from '../../Redux/buttons.json';

function Modal() {

    const dispatch = useDispatch();
    const modal = useSelector(state=> state.modals.modalShown);
    const modalCss = useSelector(state=> state.modals.modal_style);

    const showModal = (modalId) =>{
        dispatch(updateModalContent(buttonList.modal[modalId].modalCode[modalId].htmlCode))
        showDynamicModal(modal)
    }

    function showDynamicModal(modalContent) {
        const modalRoot = document.querySelector('.modalShownContainer');
    
        // Crear un contenedor para el contenido del modal
    const modalDiv = document.createElement('div');
    
    // Insertar el contenido del modal (asegúrate de que modalContent sea HTML válido)
    modalDiv.innerHTML = modalContent;
    // Agregar el modal al DOM
    modalRoot.appendChild(modalDiv);
    }
    
    function removeDynamicModal(modalDiv) {
        const modalRoot = document.querySelector('.modalShownContainer');
        modalRoot.removeChild(modalDiv);
    }
    return(
        <>
            <div className="modalShownContainer"></div>
            <section className="modal-container">
                <article className="modal-model">
                    <h3>Modal model : 1</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{
                            showModal(0)}}>Try Yourself</button>
                    </div>
                </article>
                <article className="modal-model">
                    <h3>Modal model : 2</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{showModal(1)}}>Try Yourself</button>
                    </div>
                </article>
                <article className="modal-model">
                    <h3>Modal model : 3</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{showModal(2)}}>Try Yourself</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Modal;
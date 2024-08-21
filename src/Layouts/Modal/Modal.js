import React, { useEffect } from 'react';
import CodeLog from '../../Kit/CodeLog'
import './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateModalContent, modalStyle } from '../../Redux/modalRedux';
import buttonList from '../../Redux/buttons.json';

function Modal() {

    const dispatch = useDispatch();
    const modal = useSelector(state=> state.modals.modalShown);
    const modalCss = useSelector(state=> state.modals.modal_style);
    const code = buttonList.modal[0].modalCode[0]
    const code_2 = buttonList.modal[0].modalCode[1]

    // Ejecuta la función showDynamicModal cada vez que el contenido del modal cambia
    useEffect(() => {
        if (modal) {
            showDynamicModal(modal);
        }
    }, [modal]);

    const showModal = (modalId) =>{
        dispatch(updateModalContent(buttonList.modal[0].modalCode[modalId].htmlCode))
    }

    const modalContainerCreation = (modalRoot,modalContent)=>{
        const modalDiv = document.createElement('div');
        modalDiv.setAttribute("id","child")
        // Insertar el contenido del modal (asegúrate de que modalContent sea HTML válido)
        modalDiv.innerHTML = modalContent;
        // Agregar el modal al DOM
        modalRoot.appendChild(modalDiv); 
    }

    function showDynamicModal(modalContent) {
        const modalRoot = document.querySelector('.modalShownContainer');
        const existingModal = document.getElementById('child')
        if (modalRoot.hasChildNodes()) {
            modalRoot.removeChild(existingModal)
            modalContainerCreation(modalRoot,modalContent)
        } else{
            modalContainerCreation(modalRoot,modalContent)
        }
    }

    return(
        <>
            <div className="modalShownContainer"></div>
            <section className="modal-container">
                <article className="modal-model model_1">
                    <h3>Modal model : 1</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{
                            showModal(0)}}>Try Yourself</button>
                    </div>
                    <CodeLog htmlCode={code.htmlCode} cssCode={code.cssCode} jsCode={false} content={'.model_1'}/>
                </article>
                <article className="modal-model model_2">
                    <h3>Modal model : 2</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{
                            showModal(1)}}>Try Yourself</button>
                    </div>
                    <CodeLog htmlCode={code_2.htmlCode} cssCode={code_2.cssCode} jsCode={false} content={'.model_2'}/>
                </article>
                <article className="modal-model">
                    <h3>Modal model : 3</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button" onClick={()=>{
                            showModal(2)}}>Try Yourself</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Modal;
import React from 'react';
import './Modal.css';
import buttonList from '../../Redux/buttons.json';
import ModalContainer from '../../Components/Modal/ModalContainer';

function Modal() {
    const code = buttonList.modal[0].modalCode[0];
    const code_2 = buttonList.modal[0].modalCode[1];


    return (
        <>
            <section className="modal-container">
                <ModalContainer 
                keya="modal1"
                modalName="Modal 1"
                htmlCode={code.htmlCode}
                stylefix={code.cssCode}
                jsCode={false}
                author={code.author}/>
                <ModalContainer 
                keya="modal2"
                modalName="Modal 2"
                htmlCode={code_2.htmlCode}
                stylefix={code_2.cssCode}
                jsCode={false}
                author={code_2.author}/>
            </section>
        </>
    );
}

export default Modal;

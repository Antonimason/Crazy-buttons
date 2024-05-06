import React from 'react';
import './Modal.css';

function Modal() {
    return(
        <>
            <section className="modal-container">
                <article className="modal-model">
                    <h3>Modal model : 1</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button">Try Yourself</button>
                    </div>
                </article>
                <article className="modal-model">
                    <h3>Modal model : 2</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button">Try Yourself</button>
                    </div>
                </article>
                <article className="modal-model">
                    <h3>Modal model : 3</h3>
                    <div className="modal-model-try">   
                        <p className="modal-text">This is a Modal box</p>
                        <button className="modal-button">Try Yourself</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Modal;
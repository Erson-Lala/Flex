import React from 'react';
import ReactModal from 'react-modal';
import './Modal.scss';

function Modal({ isOpen, onRequestClose, children }) {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
            {children}
        </ReactModal>
    );
}

export default Modal;

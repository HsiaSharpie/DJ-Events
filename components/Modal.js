import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import Modalstyles from '@/styles/Modal.module.css';

export default function Modal({ show, onClose, children, title}) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    })

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={Modalstyles.overlay}>
            <div className={Modalstyles.modal}>
                <div className={Modalstyles.header}>
                    <a href="#" onClick={handleClose}>
                        <FaTimes />
                    </a>
                </div>
                {title && <div>{title}</div>}
                <div className={Modalstyles.body}>
                    {children}
                </div>
            </div>
        </div>
    ) : (
        null
    )

    if(isBrowser) {
        // window object is available to us
        return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    } else {
        return null
    }
}

import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { TodoContext } from "../../TodoContext";

function Modal({children}){
    const [isBrowser, setIsBrowser] = useState(false);
    const openModal = useContext(TodoContext);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const modalContent = openModal ? (
        <div className={styles.ModalBackground}>
            {children}
        </div>
    ): null;

    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal')
        )
    }else{
        return null;
    }
}

export { Modal };
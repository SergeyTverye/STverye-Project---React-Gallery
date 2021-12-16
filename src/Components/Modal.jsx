import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {

    const closeModalWindows = (e) => {
        setSelectedImg(null)
    }

    return (
        <div className="modal_window"
        onClick={closeModalWindows}
        >
            <img
                className="modal_window__img"
                src={selectedImg} alt="" />
        </div>
    );
};

export default Modal;
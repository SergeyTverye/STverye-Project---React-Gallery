import React from 'react';
import style from './MyModal.module.css'

const MyModal = ({children, visible,setVisible}) => {

    const Classes = [style.myModal]
    if(visible) {
        Classes.push(style.myModal_active)
    }

    return (
        <div className={Classes.join(' ')} onClick={()=>setVisible(false)}>
            <div className={style.myModal__content}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
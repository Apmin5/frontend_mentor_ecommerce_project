import React, { useContext, useState } from 'react';
import { flushSync } from 'react-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { GlobalContext } from '../../../ContextState/GlobalContext';
import ModalBox from '../../ModalBox/ModalBox';
import Slider from '../Slider/Slider';
import styles from "./Left.module.css";

const Left = () => {

    const [full , setFull] = useState(false);
    
    const fullScreenHandler = () => {
        setFull(true);
    }
    const closeHandler = () => {
        setFull(false);
    }
    const removeOverlayHandler = () => {
        setFull(false);
    }
    return(
        <Fragment>
                <div className={styles.container}>
                    <Slider onClickHandler={fullScreenHandler} />
                </div>
                {full && (
                    <div className={styles.Dnone}>
                        <div className={styles.overLay} onClick={removeOverlayHandler}></div>
                        <div className={styles.modal}>
                            <ModalBox onClose={closeHandler} />
                        </div>
                    </div>  )  
                }
            
            
        </Fragment>
    );
}


export default Left;
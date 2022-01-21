import React from 'react';
import styles from "./BodyContainer.module.css";
import Left from './Left/Left';
import Right from './Right/Right';

const BodyContainer = () => {
    return(
        <div className={styles.container}>
            <Left />
            <Right />
        </div>
    );
}

export default BodyContainer;
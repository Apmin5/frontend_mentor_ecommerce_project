import React from 'react';
import styles from "./BodyContainer.module.css";
import Left from './Left/Left';
import Right from './Right/Right';

const BodyContainer = ({getItem}) => {
    return(
        <div className={styles.container}>
            <Left />
            <Right getItem={getItem} />
        </div>
    );
}

export default BodyContainer;
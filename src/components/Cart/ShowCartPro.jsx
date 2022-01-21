import React from 'react';
import styles from "./ShowCartPro.module.css";

const ShowCartPro = ({onShow}) => {
    const proImg = "images/image-product-1.jpg";
    const delIcon = "images/icon-delete.svg";
    return(
        <div className={`${styles.container} ${styles[onShow?"active" : ""]}`}>
            <div className={styles.cardTitle}>
                <span>Cart</span>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.proImg}>
                    <img src={`${process.env.PUBLIC_URL}/${proImg}`} alt="proImg" />
                </div>
                <div className={styles.proNAndP}>
                    <div className={styles.proName}>Fall limited Ediction Sneakers</div>
                    <div className={styles.priceBox}>
                        <span className={styles.price}>$125.00 x 3</span>
                        <span className={styles.totalAmt}>$375.00</span>
                    </div>
                    
                </div>
                <button className={styles.deleteBtn}>
                    <img src={`${process.env.PUBLIC_URL}/${delIcon}`} alt="delIcon" />
                </button>
            </div>
            <button className={styles.checkoutBtn}> 
                Check Out
            </button>
        </div>
    );
}

export default ShowCartPro;
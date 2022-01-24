import React from 'react';
import styles from "./ShowCartPro.module.css";

const ShowCartPro = (props) => {
    
    const delIcon = "images/icon-delete.svg";
    const onShow = props.onShow;
    const value = props.value;
    

    
    return(
        <div className={`${styles.container} ${styles[onShow?"active" : ""]}`}>
            <div className={styles.cardTitle}>
                <span>Cart</span>
            </div>
            {
                value.length == 0 ? <p className={styles.ptag}>Cart Empty</p> :
                <>
                    {value.map(val => {
                        return(
                            <>
                            <div className={styles.cardBody} key={val.id}>
                                <div className={styles.proImg}>
                                    <img src={`${process.env.PUBLIC_URL}/${val.src}`} alt="proImg" />
                                </div>
                                <div className={styles.proNAndP}>
                                    <div className={styles.proName}>{val.proName}</div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.price}>${`${val.disPrice} x ${val.count}`}</span>
                                        <span className={styles.totalAmt}>${val.disPrice*val.count}</span>
                                    </div>
                                    
                                </div>
                                <button 
                                    onClick={()=>props.remove(val)}
                                    className={styles.deleteBtn}
                                >
                                    <img src={`${process.env.PUBLIC_URL}/${delIcon}`} alt="delIcon" />
                                </button>
                            </div>
                            <button className={styles.checkoutBtn}> 
                                Check Out
                            </button>
                            </>
                        );
                    })}
                </>
            }
            
        </div>
    );
}

export default ShowCartPro;
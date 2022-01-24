import React, { useContext, useReducer } from 'react';
import { Fragment, useState } from 'react/cjs/react.development';
import { cartReducer, GlobalContext } from '../../../ContextState/GlobalContext';
import styles from "./Right.module.css";

const Right = ({getItem}) => {

    const [initVal , setInitVal] = useState(1);
    const {products} = useContext(GlobalContext);
    

    
    const increaseHandler = (isPlus = true)=> {
        if(isPlus){
            if(initVal == 9){
                setInitVal(9);
            }else{
                setInitVal(initVal+1);
            }
            
        }else{
            if(initVal == 1){
                setInitVal(1)
            }else{
                setInitVal(initVal-1)
            }
        }

    }

    const onClickHandler = (event) => {
        getItem({...event , count:initVal , type:"Add"});
        
    }
    
    return(
        <Fragment>
            {
                products.map((pro)=>{
                    return(
                        <div className={styles.container} key={pro.id}>
                            <a href="#">{pro.comName}</a>
                            <h2>{pro.proName}</h2>
                            <p>
                                {pro.proDescription}
                            </p>
                            <div className={styles.priceBox}>
                                <h4>${pro.disPrice}</h4>
                                <span>{pro.discount}</span>
                            </div>
                            <div>${pro.price}</div>
                            <div className={styles.btnCon}>
                                <div className={styles.leftBtn}>
                                    <button 
                                        className={styles.btnOne}
                                        onClick={()=>increaseHandler(false)}
                                    >-</button>
                                    <input 
                                        value={initVal} 
                                        type="number" 
                                        min="1" 
                                        max="10" 
                                    />
                                    <button 
                                        className={styles.btnTwo}
                                        onClick={()=>increaseHandler(true)}
                                    >+</button>
                                </div>
                                <button 
                                    onClick={()=>onClickHandler(pro)}
                                    className={styles.rightBtn} 
                                    
                                >
                                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </Fragment>
    );
}


export default Right;
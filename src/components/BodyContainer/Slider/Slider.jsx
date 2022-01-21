import React,{ useContext } from 'react';
import styles from "./Slider.module.css";
import {GlobalContext} from "../../../../src/ContextState/GlobalContext";
import { useState } from 'react/cjs/react.development';

const Slider = ({onClickHandler}) => {
    const {images} = React.useContext(GlobalContext);
    const mainImg = images[0].src;
    const [activeImg , setActiveImg] = useState();
    const [imgId , setImgId] =useState(images[0].id);
    const [initVal ,setInitVal ] = useState(0)

    const clickActiveHandler = (img) => {
        setActiveImg(img.src);
        setImgId(img.id);
    }

    const arrowClickHandler = (isNext = true) => {
        if(isNext) {
            if(initVal == 3){
                setInitVal(3);
               
            }else{
                setInitVal(initVal+1)
            }
            
        }else{
            if(initVal == 0){
                setInitVal(0)
            }else{
                setInitVal(initVal-1)
            }
        }
        
        setActiveImg(images[initVal].src);
        setImgId(images[initVal].id)
    }

    return(
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <div className={styles.arrowBox}>
                    <button 
                        className={styles.leftArr}
                        onClick={()=>arrowClickHandler(true)}
                    >
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button 
                        className={styles.rightArr}
                        onClick={()=>arrowClickHandler(false)}
                    >
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <img 
                    onClick={()=>onClickHandler()}
                    src={`${process.env.PUBLIC_URL}/${activeImg? activeImg : mainImg}`} 
                    alt="mainImg" 
                />
            </div>
            <div className={styles.ulbox}>
                <ul>
                    {images.map((img , index)=>{
                        return  <li key={index} className={img.id == imgId?`${styles.active}` :""}
                                    onClick={()=>clickActiveHandler(img)}
                                >
                                    
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${img.src}`} 
                                        alt={img.alt} 
                                    />

                                </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Slider;
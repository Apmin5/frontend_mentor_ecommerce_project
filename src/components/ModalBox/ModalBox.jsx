
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { GlobalContext } from '../../ContextState/GlobalContext';

import styles from "./ModalBox.module.css";

const ModalBox = ({onClose}) => {
    const {images} = useContext(GlobalContext);
    const mainImg = images[0].src;
    const [activeImg , setActiveImg] = useState();
    const [imgId , setImgId] =useState(images[0].id);
    const [initVal , setInitVal] = useState(0);

    const clickActiveHandler = (img) => {
        setActiveImg(img.src);
        setImgId(img.id);
    }
    // const arrowClickHandler = () => {}

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
            <div className={`${styles.container} ${styles.Dnone}`}>
                <div className={styles.imgBox}>
                    <button className={styles.closeBtn} 
                        onClick={onClose}
                    >
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
                    </button>
                    <div className={styles.arrowBox}>
                        <button 
                            className={styles.leftArr}
                            onClick={()=>arrowClickHandler(false)}
                        >
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </button>
                        <button 
                            onClick={()=>arrowClickHandler(true)}
                            className={styles.rightArr}
                        >
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                            </button>
                    </div>
                    <img 
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

export default ModalBox;
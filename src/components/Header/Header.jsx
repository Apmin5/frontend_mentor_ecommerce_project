import React from 'react';
import { useState } from 'react';
import ShowCartPro from '../Cart/ShowCartPro';
import styles from "./Header.module.css";

const Header = () => {
    const logo = "images/logo.svg";
    const cart = "images/icon-cart.svg";
    const user = "images/image-avatar.png";
    const close = "images/icon-close.svg";
    // {`${process.env.PUBLIC_URL}/images/${activeImage?.src}`}]
    const [showMenu , setShowMenu] = useState(false);
    const [showCart , setShowCart] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(true);
    }

    const closeBtnHandler = () => {
        setShowMenu(false);
    }

    const showCartHandler = () => {
        setShowCart(!showCart);
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.left}>
                <button 
                    className={`${styles.closeBtn} ${styles[showMenu ? "active" : ""]}`}
                    onClick={closeBtnHandler}
                >
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
                </button>
                <div 
                    className={styles.menuBtn}
                    onClick={showMenuHandler}
                >
                    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>
                </div>
                <div className={styles.logo}>
                    <img src={`${process.env.PUBLIC_URL}/${logo}`} alt="logo" />
                </div>
                <div className={`${styles.navCon} ${styles[showMenu ? "active" : ""]}`}>
                    <button className={styles.closeBtn}>
                        <img src={`${process.env.PUBLIC_URL}/${close}`} alt="closeBTn" />
                    </button>
                    <ul className={`${styles.nav}`}>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cartBox}>
                    <button className={styles.cart}
                        onClick={showCartHandler}
                    >
                        <img src={`${process.env.PUBLIC_URL}/${cart}`} alt="cart" />
                    </button>
                    <span className={styles.badges}></span>
                   
                    <ShowCartPro onShow={showCart} />
                </div>
                <button className={styles.user}>
                    <img src={`${process.env.PUBLIC_URL}/${user}`} alt="user" />
                </button>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';

import {useSelector} from "react-redux";

import styles from "./assets/css/MobileSideMenu.module.css";

const MobileSideMenu = () => {
    const isOpen = useSelector((state: { mobileSideMenu: { isOpen: boolean } }) => state.mobileSideMenu.isOpen);
    return (
        <>
            {
                isOpen ? (<div className={styles['mobile-side-menu-wrapper']}>
                    <div className={styles['mobile-side-menu']}>

                    </div>
                </div>) : null
            }
        </>
    );
};

export default MobileSideMenu;

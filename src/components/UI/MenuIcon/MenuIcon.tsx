import React, {useState} from 'react';
import IconMenu from "../MenuIcon/assets/img/icon-menu.svg";
import CloseIconMenu from "../MenuIcon/assets/img/icon-close-menu.svg";


import styles from "./assets/css/MenuIcon.module.css";

const MenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles['menu-icon']}>
            <img src={isOpen === false ? IconMenu : CloseIconMenu} alt="" onClick={()=> setIsOpen(!isOpen)}/>
        </div>
    );
};

export default MenuIcon;

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {toggleMenuAction} from "../../../store/reducers/mobileSideMenuReducer";

import IconMenu from "../MenuIcon/assets/img/icon-menu.svg";
import CloseIconMenu from "../MenuIcon/assets/img/icon-close-menu.svg";


import styles from "./assets/css/MenuIcon.module.css";


const MenuIcon = () => {
    const isOpen = useSelector((state:{mobileSideMenu: {isOpen: boolean}}) => state.mobileSideMenu.isOpen);
    const dispatch = useDispatch();

    return (
        <div className={`${styles['menu-icon']} ${isOpen? styles['active']: ''}`}>
            <img src={!isOpen ? IconMenu : CloseIconMenu} alt="" onClick={()=> dispatch(toggleMenuAction())}/>
        </div>
    );
};

export default MenuIcon;

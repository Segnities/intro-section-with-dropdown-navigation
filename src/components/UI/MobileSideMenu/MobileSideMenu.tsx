import React from 'react';
import {useSelector} from "react-redux";

import {features, company} from "../../../storage/DropdownMenuItems";

import styles from "./assets/css/MobileSideMenu.module.css";
import MyDropdown from "../Dropdown/MyDropdown";
import BtnLink from "../Button/BtnLink/BtnLink";
import BtnTransparent from "../Button/BtnTransparent/BtnTransperent";

const MobileSideMenu = () => {
    const isOpen = useSelector((state: { mobileSideMenu: { isOpen: boolean } }) => state.mobileSideMenu.isOpen);
    return (
        <>
            {
                isOpen ? (<header className={styles['mobile-side-menu-wrapper']}>
                    <div className={styles['mobile-side-menu']}>
                        <div className={styles['mobile-side-menu-items']}>
                            <MyDropdown title={'Features'} items={features}/>
                            <MyDropdown title={'Company'} items={company}/>
                            <a href="#" aria-hidden={true}>Careers</a>
                            <a href="#" aria-hidden={true}>About</a>
                            <BtnLink title={'Login'} additonalStyles={{width: "100%"}}/>
                            <BtnTransparent title={'Register'} additonalStyles={{width: "100%"}}/>
                        </div>
                    </div>
                </header>) : null
            }
        </>
    );
};

export default MobileSideMenu;

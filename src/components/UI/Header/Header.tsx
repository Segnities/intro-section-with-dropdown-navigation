import React from "react";

import MyDropdown from "../Dropdown/MyDropdown";
import MenuIcon from "../MenuIcon/MenuIcon";


import {features, company} from "../../../storage/DropdownMenuItems";

import Logo from "./assets/img/logo.svg";


import styles from "./assets/css/Header.module.css";
import BtnLink from "../Button/BtnLink/BtnLink";
import BtnTransparent from "../Button/BtnTransparent/BtnTransperent";


const Header = () => {
    return (
        <header>
            <nav className={styles["header"]}>
                <div className={styles["menu-wrapper"]}>
                    <img
                        src={Logo}
                        alt="Logo"
                        className={styles["logo"]}
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <div className={styles['menu-options']}>
                        <MyDropdown title={"Features"} items={features} dropdownMenuStyle={{right: 0}}/>
                        <MyDropdown title={"Company"} items={company} dropdownMenuStyle={{left: "10px"}}/>
                        <div className={styles["header-item"]}><a href="#">Careers</a></div>
                        <div className={styles["header-item"]}><a href="#">About</a></div>
                    </div>
                </div>
                <MenuIcon/>
                <div className={styles["sign-up"]}>
                    <BtnLink title={"Login"}/>
                    <BtnTransparent title={"Register"}/>
                </div>
            </nav>
        </header>
    );
};

export default Header;

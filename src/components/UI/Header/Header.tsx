import React from "react";

import MyDropdown from "../Dropdown/MyDropdown";

import Logo from "./assets/img/logo.svg";
import TodoList from "./assets/img/icon-todo.svg";
import Calendar from "./assets/img/icon-calendar.svg";
import Reminders from "./assets/img/icon-reminders.svg";
import Planning from "./assets/img/icon-planning.svg";

import styles from "./assets/css/Header.module.css";

import {nanoid} from "nanoid";
import MenuIcon from "../MenuIcon/MenuIcon";

const Header = () => {
    const features = [
        {id: nanoid(), title: "Todo List", icon: TodoList},
        {id: nanoid(), title: "Calendar", icon: Calendar},
        {id: nanoid(), title: "Reminders", icon: Reminders},
        {id: nanoid(), title: "Planning", icon: Planning},
    ];
    const company = [
        {id: nanoid(), title: "History"},
        {id: nanoid(), title: "Our Team"},
        {id: nanoid(), title: "Blog"},
    ];
    return (
        <header>
            <nav className={styles["header"]}>
                <div className={styles["menu-wrapper"]}>
                    <img
                        src={Logo}
                        alt=""
                        className={styles["logo"]}
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <div className={styles['menu-options']}>
                        <MyDropdown title={"Features"} items={features} dropdownMenuStyle={{right: 0}}/>
                        <MyDropdown title={"Company"} items={company} dropdownMenuStyle={{left: "10px"}}/>
                        <div className={styles["header-item"]}>Careers</div>
                        <div className={styles["header-item"]}>About</div>
                    </div>
                </div>
                <MenuIcon/>
                <div className={styles["sign-up"]}>
                    <button className={styles["btn-login"]}>Login</button>
                    <button className={styles["btn-register"]}>Register</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

import React, {useState} from 'react';

import IconArrowUp from "./assets/img/icon-arrow-up.svg"
import IconArrowDown from "./assets/img/icon-arrow-down.svg";

import styles from "./assets/css/Dropdown.module.css";

interface myDropdownProps {
    title: string;
    items: { id: string, title: string, icon?: string }[],
    dropdownMenuStyle?: object
}

const MyDropdown = (props: myDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles['dropdown-root']} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles['dropdown-control']}>
                <div className={styles['dropdown-placeholder']}>{props.title}</div>
                <div className={'dropdown-arrow-wrapper'}>
                    {isOpen ? <img src={IconArrowUp} alt="" className={styles['arrow']}/> :
                        <img src={IconArrowDown} alt="" className={styles['arrow']}/>}</div>
            </div>
            {
                isOpen ? <div className={styles['dropdown-menu']} style={props.dropdownMenuStyle}>
                    {
                        props.items.map(dropdownMenuItem => (
                            <div className={styles['dropdown-menu-item']} key={dropdownMenuItem.id}>
                                {
                                    dropdownMenuItem.icon ? <div><img src={dropdownMenuItem.icon} alt=""/></div> : null

                                }
                                <p><a href="#">{dropdownMenuItem.title}</a></p>
                            </div>
                        ))
                    }
                </div> : null
            }
        </div>
    );
};

export default MyDropdown;

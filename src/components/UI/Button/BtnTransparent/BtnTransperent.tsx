import React from 'react';

import styles from "./assets/BtnTransparent.module.css";

interface btnTransparentProps {
    title:string,
    additonalStyles?: object
}

const BtnTransparent = (props:btnTransparentProps) => {
    return (
        <button className={styles["btn-transparent"]} style={props.additonalStyles}><a href="#" >{props.title}</a></button>

    );
};

export default BtnTransparent;

import React from 'react';

import styles from "./assets/BtnLink.module.css";

interface btnLinkProps {
    title: string,
    additonalStyles?: object
}

const BtnLink = (props:btnLinkProps) => {
    return (
        <button className={styles["btn-link"]} style={props.additonalStyles}><a href={'#'}>{props.title}</a></button>
    );
};

export default BtnLink;

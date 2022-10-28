import React from 'react';

import Header from "./components/UI/Header/Header";
import RemoteWork from "./components/RemoteWork/RemoteWork";

import styles from './App.module.css';


function App() {
    return (
        <div className={styles['app']}>
            <Header/>
            <RemoteWork/>
        </div>
    )
}

export default App

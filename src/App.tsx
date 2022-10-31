import React from 'react';

import {Provider} from "react-redux";
import store from "./store";


import Header from "./components/UI/Header/Header";
import RemoteWork from "./components/RemoteWork/RemoteWork";

import styles from './App.module.css';
import MobileSideMenu from "./components/UI/MobileSideMenu/MobileSideMenu";


function App() {
    return (
        <Provider store={store}>
        <div className={styles['app']}>
            <Header/>
            <MobileSideMenu/>
            <RemoteWork/>
        </div>
        </Provider>
    )
}

export default App

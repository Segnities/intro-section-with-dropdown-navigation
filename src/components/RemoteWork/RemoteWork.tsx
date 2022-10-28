import React from 'react'

import ImageHeroDesktop from "./assets/img/image-hero-desktop.png"

import ClientAudiophile from "./assets/img/client-audiophile.svg";
import ClientDatabiz from  "./assets/img/client-databiz.svg";
import ClientMaker from "./assets/img/client-maker.svg";
import ClientMeet from "./assets/img/client-meet.svg";

import styles from "./assets/css/RemoteWork.module.css";

const RemoteWork = () => {
    return (
        <main className={styles['content-wrapper']}>
            <div className={styles['remote-wrapper']}>
                <section className={styles['remote-info']}>
                    <h2>Make remote work</h2>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes, create team rituals, and
                        watch productivity soar.
                    </p>
                    <button>Learn more</button>
                    <div className={styles['clients']}>
                        <img src={ClientDatabiz} alt=""/>
                        <img src={ClientAudiophile} alt=""/>
                        <img src={ClientMeet} alt=""/>
                        <img src={ClientMaker} alt=""/>
                    </div>
                </section>
                <div className={styles['hero-img']}>
                    <img src={ImageHeroDesktop} alt="" onDragStart={(e)=> e.preventDefault()}/>
                </div>
            </div>
        </main>
    )
}

export default RemoteWork;
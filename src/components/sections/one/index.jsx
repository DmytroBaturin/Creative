import styles from './sectionOne.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

export const SectionOne = () => {
    return(
        <div id='slide' className={styles.section}>
            <h1>Who i am?</h1>
            <div className={styles.img}>
            </div>
        </div>
    )
}
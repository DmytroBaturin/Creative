import styles from './title.module.scss'
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Title = () => {

    return(
        <div className={styles.title}>
            <div className='zoom-in'>
            <h1>
                All what you must know
                about me.
            </h1>
                <p>scroll down</p>
            </div>
        </div>
    )
}
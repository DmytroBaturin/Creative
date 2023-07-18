import styles from './cursor.module.scss'
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

export const Cursor = () => {

    const mouseMove = (e) => {
        gsap.to('#cursor',
            {
                ease:'power3.out',
                duration: 0.3,
                x: e.clientX,
                y: e.clientY
            })
        gsap.to('#cursordelay', {
            ease:'power3.out',
            duration: 0.5,
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
     window.addEventListener("mousemove", mouseMove);
     return () => {
         window.removeEventListener("mousemove", mouseMove);
     }
    })

    return(
        <>
            <div id='cursor' className={styles.cursor}></div>
            <div id='cursordelay' className={styles.cursorDelay}></div>
        </>
    )
}
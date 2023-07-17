import styles from './styles.module.scss';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const refS = useRef(null);
    const skills = ['<HTML/>', '.CSS',"module.SASS", 'JS()', 'Redux Toolkit', "Git"];

    return (
        <>
            <div className={styles.black}>
            <div id="wrapper" className={styles.wrapper}>
                {skills.map((val, i) => (
                    <h1 ref={refS} className={styles.skill}>
                        {val}
                    </h1>
                    ))}

            </div>
            </div>
        </>
    );
};

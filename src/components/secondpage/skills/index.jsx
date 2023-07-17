import styles from './styles.module.scss';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const refS = useRef(null);
    const skills = ['<HTML/>', '.CSS', 'JS()', 'Redux Toolkit'];

    useEffect(() => {

    }, []);

    return (
        <>
            <div id="wrapper" className={styles.wrapper}>
                    <h1 ref={refS} className={styles.skill}>
                        {skills[0]}
                    </h1>
            </div>
        </>
    );
};

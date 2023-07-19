import styles from './title.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {TimelineMax} from "gsap/gsap-core";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TimelineMax,TextPlugin)


export const Title = () => {
    const text = 'All what you must know about me.';
    const titleRef = useRef(null);
    const point = useRef(null);

    useEffect(() => {
       let typeWrite =  gsap.fromTo(
            titleRef.current,
            { text: '' },
            {
                duration: 5,
                text: text,
                ease: 'power1.inOut',
            }
        );
        return () => {
           typeWrite.kill()
        }
    }, []);


    return (
        <div className={styles.title}>
            <div className='zoom-in'>
                <h1 ref={titleRef}>
                    All what you must know
                    about me<span ref={point} className={styles.point}>.</span>
                </h1>
            </div>
        </div>
    );
};

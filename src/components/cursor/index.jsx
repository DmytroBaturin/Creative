import styles from './cursor.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
    const cursorRef = useRef(null);
    const cursor = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            gsap.to("#cursor", {
                ease: 'power3.out',
                duration: 0.3,
                x: e.clientX,
                y: e.clientY,
            });
            gsap.to("#cursordelay", {
                ease: 'power3.out',
                duration: 0.5,
                x: e.clientX,
                y: e.clientY,
            });
        };
        const handleScroll = () => {
            if (cursorRef.current || cursor.current) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                cursorRef.current.style.top = `${scrollTop}px`;
                cursor.current.style.top = `${scrollTop}px`;
            }
        };
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="cursor" ref={cursorRef} className={styles.cursor}></div>
            <div id="cursordelay" ref={cursor} className={styles.cursorDelay}></div>
        </>
    );
};

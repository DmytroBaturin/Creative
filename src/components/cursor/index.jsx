import styles from './cursor.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useLocation} from "react-router-dom";

export const Cursor = () => {
    const cursorRef = useRef(null);
    const cursor = useRef(null);
    let location = useLocation();
    useEffect(() => {
        const hoverables = document.querySelectorAll('.hoverable');
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
        }
        const onMouseHover = () => {
            gsap.to("#cursor", {
                ease: 'power3.out',
                scale: 3.3,
                duration: 1
            });
        }
        const onMouseHoverOut = () => {
            gsap.to("#cursor", {
                ease: 'power3.out',
                scale: 1,
                duration: 1
            });
        }
            for (let i = 0; i < hoverables.length; i++) {
                hoverables[i].addEventListener('mouseenter', onMouseHover);
                hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }
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
    }, [location]);

    return (
        <>
            <div id="cursor" ref={cursorRef} className={styles.cursor}></div>
            <div id="cursordelay" ref={cursor} className={styles.cursorDelay}></div>
        </>
    );
};

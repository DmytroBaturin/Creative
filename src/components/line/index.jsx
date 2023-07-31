import React, { useEffect, useState } from "react";
import styles from "./line.module.scss";

export const Line = () => {
    const [scrollY, setScrollY] = useState(0);
    const calculateHeight = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const maxHeight = 345;
        const minHeight = 0;
        return (maxHeight - minHeight) * (scrollY / maxScroll) + minHeight;
    };
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={calculateHeight() >= 300 ? {
            transition: 'opacity 0.4s ease-in-out',
            opacity: 0.05,
        }: {
            transition: 'opacity 0.2s ease-in-out',
        }} className={styles.container}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.42 340.88">
                <defs>
                    <mask id="halfMask">
                        <rect width="100%" height={calculateHeight()} fill="white"/>
                    </mask>
                </defs>
                <title>Asset 1</title>
                <g id="Layer_2">
                    <g id="Layer_1-2">
                        <path className="cls-2" fill="white" opacity="0.2"
                              d="M6.21,340.88c-7.15,0-8.94-11.21-1-12.84V230.79c-6.3-1-7.55-11.2,0-12.75V120.79c-6.3-1-7.55-11.2,0-12.75V12.91C-1.36,11.87-2.44.84,6.21,0c7.15,0,8.94,11.21,1,12.84V108c6.3,1,7.55,11.2,0,12.75V218c6.3,1,7.55,11.2,0,12.75V328C13.78,329,14.86,340,6.21,340.88Z"/>
                        <path className="cls-1" fill="white" opacity="1"
                              d="M6.21,340.88c-7.15,0-8.94-11.21-1-12.84V230.79c-6.3-1-7.55-11.2,0-12.75V120.79c-6.3-1-7.55-11.2,0-12.75V12.91C-1.36,11.87-2.44.84,6.21,0c7.15,0,8.94,11.21,1,12.84V108c6.3,1,7.55,11.2,0,12.75V218c6.3,1,7.55,11.2,0,12.75V328C13.78,329,14.86,340,6.21,340.88Z"
                              mask="url(#halfMask)"/>
                    </g>
                </g>
            </svg>

            {/*<svg width="17" height="345" viewBox="0 0 17 345" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <circle cx="8" cy="8" r="8" fill="white"/>*/}
            {/*    <path d="M7 18H9V156.057V171.938V337H7C7 337 7 335.409 7 332.5C7 312.279 7 228.355 7 172C7 171.979 7 171.958 7 171.938C7 165.736 7 156.057 7 156.057V18Z" fill="white" fill-opacity="0.1"/>*/}
            {/*    <rect x="7" y="8" width="2" height={calculateHeight()} fill="white"/>*/}
            {/*    <circle cx="8" cy="117" r="6.5"  fill="none" stroke={calculateHeight() >= 117 ? "white" : '#1A1A1A'} strokeWidth="3"/>*/}
            {/*    <circle cx="8" cy="227" r="6.5"  fill="none" stroke={calculateHeight() >= 227 ? "white" : '#1A1A1A'} strokeWidth="3"/>*/}
            {/*    <circle cx="8" cy="337" r="6.5"  fill="none" stroke={calculateHeight() >= 337 ? "white" : '#1A1A1A'} strokeWidth="3"/>*/}
            {/*</svg>*/}
        </div>
    );
};

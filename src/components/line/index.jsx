import React, { useEffect, useState } from "react";
import styles from "./line.module.scss";

export const Line = ({ pageRef }) => {
    const [scrollY, setScrollY] = useState(0);
    const calculateHeight = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const maxHeight = 329;
        const minHeight = 8;
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
            transition: 'opacity 0.1s ease-in-out',
            opacity: 0,
        }: {
            transition: 'opacity 0.2s ease-in-out',
        }} className={styles.container}>
            <svg width="17" height="345" viewBox="0 0 17 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="white"/>
                <path d="M7 18H9V156.057V171.938V337H7C7 337 7 335.409 7 332.5C7 312.279 7 228.355 7 172C7 171.979 7 171.958 7 171.938C7 165.736 7 156.057 7 156.057V18Z" fill="white" fill-opacity="0.1"/>
                <rect x="7" y="8" width="2" height={calculateHeight()} fill="white"/>
                <circle cx="8" cy="117" r="6.5" fill="white" stroke={calculateHeight() >= 105 ? "white" : '#1A1A1A'} strokeWidth="3"/>
                <circle cx="8" cy="227" r="6.5" fill="white" stroke={calculateHeight() >= 220 ? "white" : '#1A1A1A'} strokeWidth="3"/>
                <circle cx="9" cy="337" r="6.5" fill="white" stroke={calculateHeight() >= 320 ? "white" : '#1A1A1A'} strokeWidth="3"/>
            </svg>
        </div>
    );
};

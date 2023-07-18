import React, { useEffect, useState } from "react";
import styles from "./line.module.scss";

export const Line = ({ pageRef }) => {
    const [scrollY, setScrollY] = useState(0);
    const calculateHeight = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const maxHeight = 329;
        const minHeight = 8;
        const height = (maxHeight - minHeight) * (scrollY / maxScroll) + minHeight;
        return height;
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
        <div className={styles.container}>
            <svg
                width="17"
                height="315"
                viewBox="0 0 17 355"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="white" />
                <rect x="7" y="8" width="2" height="329" fill="white" fillOpacity="0.1" />
                <rect x="7" y="8" width="2" height={calculateHeight()} fill="white" />
                <circle cx="8" cy="164" r="6.5" fill="white" stroke={calculateHeight() >= 160 ? "white" : '#1A1A1A'}  strokeWidth="4" />
                <circle cx="8" cy="337" r="6.5" fill="white" stroke={calculateHeight() >= 320 ? "white" : '#1A1A1A'} strokeWidth="4" />
            </svg>
        </div>
    );
};

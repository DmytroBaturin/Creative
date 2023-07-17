import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./cursor.css";
import { useSelector } from "react-redux";

export const Cursor = () => {
    const cursorRef = useRef(null);
    const cursor = useSelector(state => state.cursor.value);
    if (cursor === 1) {
        gsap.to(".cursor", {
            scale: 3
        });
    }else {
        gsap.to(".cursor", {
            scale: 1,
        });
    }
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {

            gsap.to(".cursor", {
                duration: 0.3,
                x: e.pageX,
                y: e.pageY,
            });

            gsap.to(".cursor-delay", {
                duration: 0.4,
                x: e.pageX,
                y: e.pageY,
            });
        });
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor"></div>
            <div className="cursor-delay"></div>
        </>
    );
};
